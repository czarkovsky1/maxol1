// Sterowanie kroplą: renderer three.js, fizyka (sprężyny), kursor, przewijanie.
// Ładowane dynamicznie po wyświetleniu strony, więc nie spowalnia pierwszego renderu.
import { Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, Vector2, Vector3, Vector4, WebGLRenderer } from 'three';
import fragmentShader from './liquid.frag?raw';

const CAM_Z = 3.2;
const TAN_FOV = 0.36;
const H = CAM_Z * TAN_FOV; // połowa wysokości kadru w jednostkach świata (płaszczyzna z = 0)

// Kropelki: położenie spoczynkowe wewnątrz kropli (w jednostkach kropli) i promień
const DROPLETS: { rest: [number, number, number]; r: number }[] = [
  { rest: [0.06, -0.06, 0.1], r: 0.11 },
  { rest: [-0.13, 0.0, 0.04], r: 0.09 },
  { rest: [0.11, 0.12, -0.05], r: 0.075 },
  { rest: [-0.04, -0.16, -0.08], r: 0.1 },
  { rest: [0.0, 0.3, 0.0], r: 0.055 },
];

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const smoothstep = (a: number, b: number, v: number) => {
  const t = clamp((v - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
// Sprężyste wejście kropli (lekkie przestrzelenie, jak gęsta ciecz)
const easeOutElastic = (t: number) => {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return Math.pow(2, -9 * t) * Math.sin(((t * 10 - 0.75) * (2 * Math.PI)) / 3.2) + 1;
};

export interface LiquidHeroOptions {
  reducedMotion: boolean;
}

export function initLiquidHero(root: HTMLElement, opts: LiquidHeroOptions) {
  const stage = root.querySelector<HTMLElement>('[data-stage]')!;
  const canvas = root.querySelector<HTMLCanvasElement>('canvas')!;

  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
  } catch {
    return null;
  }

  const maxDpr = Math.min(window.devicePixelRatio || 1, 1.5);
  let dpr = maxDpr;
  renderer.setPixelRatio(dpr);

  const uniforms = {
    uRes: { value: new Vector2() },
    uTime: { value: 0 },
    uCamZ: { value: CAM_Z },
    uTanFov: { value: TAN_FOV },
    uDropPos: { value: new Vector3() },
    uScale: { value: 1 },
    uJelly: { value: new Vector2() },
    uPull: { value: 0 },
    uPointer: { value: new Vector3(0, 0, 10) },
    uDroplets: { value: DROPLETS.map(() => new Vector4()) },
    uStreamOn: { value: 0 },
    uStreamX: { value: 0 },
    uStreamTop: { value: 0 },
    uStreamBottom: { value: 0 },
    uStreamR0: { value: 0 },
    uStreamR1: { value: 0 },
    uBoundsMin: { value: new Vector3() },
    uBoundsMax: { value: new Vector3() },
    uDropScreen: { value: new Vector2(0.7, 0.55) },
    uIntro: { value: 0 },
    uLevel: { value: -1 },
    uImpactX: { value: 0.7 },
    uRipple: { value: 0 },
    uSwell: { value: 0 },
    uTint: { value: 0 },
    uSurfaceRefl: { value: 0 },
    uSag: { value: 0 },
  };

  const material = new ShaderMaterial({
    uniforms,
    vertexShader: 'void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader,
    depthTest: false,
    depthWrite: false,
  });
  const mesh = new Mesh(new PlaneGeometry(2, 2), material);
  mesh.frustumCulled = false;
  const scene = new Scene();
  scene.add(mesh);
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // --- Stan ---
  let width = 1;
  let height = 1;
  let aspect = 1;
  const layout = { x: 0, y: 0, scale: 1 };

  const pointer = { x: 0, y: 0, active: false, lastMove: -10 };
  const pSmooth = { x: 0, y: 0 };
  const pVel = { x: 0, y: 0 };
  let pull = 0;
  const jelly = { x: 0, y: 0, vx: 0, vy: 0 };
  const droplets = DROPLETS.map((d) => ({ x: d.rest[0] as number, y: d.rest[1] as number, z: d.rest[2] as number, vx: 0, vy: 0, vz: 0 }));
  let cooldown = 0;

  let time = 0;
  let introT = 0;
  let progress = 0;
  let paused = false;
  let running = false;
  let firstFrame = true;
  let frameTimes: number[] = [];

  // Kropla w jednostkach kropli: dół na -0,42, czubek na +0,78 (wysokość 1,2)
  const DROP_BOTTOM = -0.42;
  const DROP_HEIGHT = 1.2;
  const pxToWorld = (px: number) => (px / height) * 2 * H;

  function computeLayout() {
    const t = smoothstep(0.75, 1.35, aspect);
    // Desktop: kropla po prawej, wyrównana z blokiem tekstu (czubek = góra nagłówka,
    // dół = dół przycisków). Telefon: nad tekstem.
    const title = root.querySelector<HTMLElement>('.hero-liquid__title');
    const actions = root.querySelector<HTMLElement>('.hero-liquid__actions');
    const content = root.querySelector<HTMLElement>('.hero-liquid__content');
    let deskScale = 1.02;
    let deskY = -0.13;
    if (title && actions && content) {
      const top = content.offsetTop + title.offsetTop;
      const bottom = content.offsetTop + actions.offsetTop + actions.offsetHeight;
      const yTop = H - pxToWorld(top);
      const yBottom = H - pxToWorld(bottom);
      deskScale = clamp((yTop - yBottom) / DROP_HEIGHT, 0.7, 1.15);
      deskY = yBottom - DROP_BOTTOM * deskScale;
    }
    layout.scale = lerp(0.6, deskScale, t);
    layout.x = H * aspect * lerp(0.2, 0.42, t);
    layout.y = lerp(0.42, deskY, t);
  }

  function resize() {
    width = stage.clientWidth;
    height = stage.clientHeight;
    aspect = width / height;
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    uniforms.uRes.value.set(width * dpr, height * dpr);
    computeLayout();
  }

  // Współrzędne ekranu → punkt na płaszczyźnie z = 0
  function toWorld(clientX: number, clientY: number) {
    const rect = stage.getBoundingClientRect();
    const ux = (clientX - rect.left - rect.width / 2) / rect.height;
    const uy = (rect.height / 2 - (clientY - rect.top)) / rect.height;
    return { x: ux * 2 * TAN_FOV * CAM_Z, y: uy * 2 * TAN_FOV * CAM_Z };
  }

  function onPointerMove(e: PointerEvent) {
    if (e.pointerType === 'touch') return;
    const w = toWorld(e.clientX, e.clientY);
    pointer.x = w.x;
    pointer.y = w.y;
    pointer.active = true;
    pointer.lastMove = time;
  }

  function onPointerLeave() {
    pointer.active = false;
  }

  function scrollProgress() {
    const total = root.offsetHeight - stage.offsetHeight;
    if (total <= 1) return 0;
    return clamp(-root.getBoundingClientRect().top / total, 0, 1);
  }

  function step(dt: number) {
    if (!paused) time += dt;
    introT = Math.min(1, introT + dt / 1.9);
    const intro = opts.reducedMotion ? 1 : easeOutElastic(introT);

    progress = opts.reducedMotion ? 0 : lerp(progress, scrollProgress(), 1 - Math.exp(-dt * 7));
    const p = progress;
    root.style.setProperty('--p', p.toFixed(4));
    root.classList.toggle('is-pouring', p > 0.28);

    // --- Przelewanie ---
    // 0–0,22: kropla się wydłuża · 0,1–0,42: struga spada do tafli ·
    // 0,3–1: kropla opróżnia się do strugi i opada, na końcu znika pod taflą.
    const sag = smoothstep(0.0, 0.22, p);
    const flowIn = smoothstep(0.1, 0.42, p);
    const drain = smoothstep(0.3, 1.0, p);
    const level = lerp(-0.05, 0.08, smoothstep(0.3, 0.88, p));
    const ySurf = -H + 2 * H * level;

    const scale = layout.scale * Math.max(intro, 0.0001) * Math.pow(1 - drain, 1.15);
    const dropX = layout.x;
    const baseY = layout.y - 0.1 * layout.scale * sag + (1 - Math.min(1, introT * 1.6)) * 0.35;
    const dropY = lerp(baseY, ySurf - 0.02, drain * drain);
    const visible = scale > 0.004;

    const attach = dropY - 0.36 * scale * (1 + 0.32 * smoothstep(0.04, 0.3, p));
    const target = Math.max(ySurf, -H) - 0.18;
    const front = lerp(attach, target, flowIn * flowIn);
    const top = attach;
    const flowOut = smoothstep(0.9, 1.0, p);
    const streamOn = visible && flowIn > 0.002 ? 1 : 0;
    const impact = smoothstep(0.33, 0.45, p) * (1 - smoothstep(0.93, 1.0, p));

    // --- Kursor (albo łagodny ruch automatyczny bez myszy) ---
    const idle = !pointer.active || time - pointer.lastMove > 3;
    let tx = pointer.x;
    let ty = pointer.y;
    if (idle) {
      tx = dropX + Math.cos(time * 0.45) * 0.62 * scale;
      ty = dropY + 0.15 * scale + Math.sin(time * 0.6) * 0.5 * scale;
    }
    const prevX = pSmooth.x;
    const prevY = pSmooth.y;
    const k = 1 - Math.exp(-dt * (idle ? 3 : 18));
    pSmooth.x = lerp(pSmooth.x, tx, k);
    pSmooth.y = lerp(pSmooth.y, ty, k);
    if (dt > 0) {
      pVel.x = lerp(pVel.x, (pSmooth.x - prevX) / dt, 0.35);
      pVel.y = lerp(pVel.y, (pSmooth.y - prevY) / dt, 0.35);
    }

    const cx = dropX;
    const cy = dropY + 0.18 * scale;
    const dist = Math.hypot(pSmooth.x - cx, pSmooth.y - cy);
    const proximity = 1 - smoothstep(0.45 * scale, 1.15 * scale, dist);
    const pullTarget = (idle ? 0.035 : 0.065) * scale * proximity * (1 - sag * 0.6);
    pull = lerp(pull, pullTarget, 1 - Math.exp(-dt * 6));

    if (!paused) {
      // Galaretowate kołysanie po „zahaczeniu” kursorem
      if (!idle) {
        jelly.vx += pVel.x * proximity * 2.6 * dt;
        jelly.vy += pVel.y * proximity * 2.6 * dt;
      }
      const ax = -68 * jelly.x - 6.5 * jelly.vx;
      const ay = -68 * jelly.y - 6.5 * jelly.vy;
      jelly.vx += ax * dt;
      jelly.vy += ay * dt;
      jelly.x = clamp(jelly.x + jelly.vx * dt, -0.16 * scale, 0.16 * scale);
      jelly.y = clamp(jelly.y + jelly.vy * dt, -0.16 * scale, 0.16 * scale);

      // Odrywanie kropelek przy szybkim ruchu przez kroplę
      cooldown -= dt;
      const speed = Math.hypot(pVel.x, pVel.y);
      const lx = (pSmooth.x - dropX) / scale;
      const ly = (pSmooth.y - dropY) / scale;
      if (!idle && speed > 1.6 && proximity > 0.35 && cooldown <= 0) {
        cooldown = 0.32;
        droplets.forEach((d, i) => {
          const r = DROPLETS[i].rest;
          const dx = r[0] - lx;
          const dy = r[1] - ly;
          const wgt = Math.exp(-(dx * dx + dy * dy) / 0.22);
          const ox = r[0] - lx * 0.3;
          const oy = r[1] - ly * 0.3;
          const ol = Math.hypot(ox, oy) || 1;
          const s = Math.min(speed, 6) / scale;
          d.vx += (pVel.x / scale) * 0.32 * wgt + (ox / ol) * s * 0.22 * wgt;
          d.vy += (pVel.y / scale) * 0.32 * wgt + (oy / ol) * s * 0.22 * wgt;
          d.vz += (Math.random() - 0.3) * s * 0.12 * wgt;
        });
      }
      droplets.forEach((d, i) => {
        const r = DROPLETS[i].rest;
        const ax2 = -20 * (d.x - r[0]) - 3.3 * d.vx;
        const ay2 = -20 * (d.y - r[1]) - 3.3 * d.vy;
        const az2 = -20 * (d.z - r[2]) - 3.3 * d.vz;
        d.vx += ax2 * dt;
        d.vy += ay2 * dt;
        d.vz += az2 * dt;
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.z += d.vz * dt;
        const ex = d.x - r[0];
        const ey = d.y - r[1];
        const ez = d.z - r[2];
        const el = Math.hypot(ex, ey, ez);
        if (el > 1.0) {
          d.x = r[0] + (ex / el) * 1.0;
          d.y = r[1] + (ey / el) * 1.0;
          d.z = r[2] + (ez / el) * 1.0;
        }
      });
    }

    // --- Uniformy ---
    const u = uniforms;
    u.uTime.value = time;
    u.uIntro.value = Math.min(1, introT * 2.5);
    u.uDropPos.value.set(dropX, dropY, 0);
    u.uScale.value = Math.max(scale, 0.004);
    u.uJelly.value.set(jelly.x, jelly.y);
    u.uPull.value = pull;
    u.uPointer.value.set(pSmooth.x - dropX, pSmooth.y - dropY, 0.22 * scale);
    droplets.forEach((d, i) => u.uDroplets.value[i].set(d.x * scale, d.y * scale, d.z * scale, DROPLETS[i].r * scale));

    u.uStreamOn.value = streamOn;
    u.uStreamX.value = dropX + jelly.x * 0.15;
    u.uStreamTop.value = top;
    u.uStreamBottom.value = Math.min(front, top - 0.002);
    u.uStreamR0.value = 0.1 * scale;
    u.uStreamR1.value = (0.028 * scale + 0.004) * (1 - flowOut);

    u.uLevel.value = level;
    u.uImpactX.value = 0.5 + dropX / (H * aspect) / 2;
    u.uRipple.value = impact;
    u.uSwell.value = smoothstep(0.3, 0.5, p) * (1 - smoothstep(0.9, 1.0, p));
    u.uTint.value = impact;
    u.uSurfaceRefl.value = smoothstep(0.3, 0.9, p) * 0.7;
    u.uSag.value = smoothstep(0.04, 0.3, p) * (1 - 0.6 * flowOut);
    u.uDropScreen.value.set(0.5 + dropX / (H * aspect) / 2, 0.5 + (dropY + 0.18 * scale) / H / 2);

    // Granice obszaru do raymarchingu (reszta ekranu = samo tło, szybko)
    let minX = dropX - 0.62 * scale;
    let maxX = dropX + 0.62 * scale;
    let minY = dropY - 0.62 * scale * (1 + 0.35 * u.uSag.value);
    let maxY = dropY + 0.9 * scale;
    let minZ = -0.62 * scale;
    let maxZ = 0.62 * scale;
    droplets.forEach((d, i) => {
      const r = (DROPLETS[i].r + 0.08) * scale;
      minX = Math.min(minX, dropX + d.x * scale - r);
      maxX = Math.max(maxX, dropX + d.x * scale + r);
      minY = Math.min(minY, dropY + d.y * scale - r);
      maxY = Math.max(maxY, dropY + d.y * scale + r);
      minZ = Math.min(minZ, d.z * scale - r);
      maxZ = Math.max(maxZ, d.z * scale + r);
    });
    minX += Math.min(jelly.x, 0);
    maxX += Math.max(jelly.x, 0);
    maxY += Math.abs(jelly.y);
    if (streamOn) minY = Math.min(minY, u.uStreamBottom.value - 0.08);
    minY = Math.max(minY, -H - 0.2);
    if (visible) {
      u.uBoundsMin.value.set(minX, minY, minZ);
      u.uBoundsMax.value.set(maxX, maxY, maxZ);
    } else {
      u.uBoundsMin.value.set(1, 1, 1);
      u.uBoundsMax.value.set(-1, -1, -1);
    }
  }

  let last = performance.now();
  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    step(dt);
    renderer.render(scene, camera);

    if (firstFrame) {
      firstFrame = false;
      root.classList.add('is-ready');
    }

    // Adaptacyjna jakość: przy zbyt wolnych klatkach obniż rozdzielczość renderu
    frameTimes.push(dt);
    if (frameTimes.length >= 40) {
      const avg = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
      frameTimes = [];
      if (avg > 0.024 && dpr > 0.6) {
        dpr = Math.max(0.6, dpr - 0.2);
        resize();
      }
    }
  }

  function start() {
    if (running || opts.reducedMotion) return;
    running = true;
    last = performance.now();
    renderer.setAnimationLoop(frame);
  }

  function stop() {
    running = false;
    renderer.setAnimationLoop(null);
  }

  function renderStatic() {
    introT = 1;
    time = 2.4;
    step(0);
    renderer.render(scene, camera);
    root.classList.add('is-ready');
  }

  // Tylko w trybie deweloperskim: ?bez-intro pomija animację wejścia (do testów wyglądu)
  if (import.meta.env.DEV && new URLSearchParams(location.search).has('bez-intro')) introT = 1;

  resize();
  pSmooth.x = layout.x + 0.6 * layout.scale;
  pSmooth.y = layout.y;

  const ro = new ResizeObserver(() => {
    resize();
    if (opts.reducedMotion || paused) renderStatic();
  });
  ro.observe(stage);

  if (opts.reducedMotion) {
    renderStatic();
  } else {
    root.addEventListener('pointermove', onPointerMove, { passive: true });
    root.addEventListener('pointerleave', onPointerLeave);
    // requestAnimationFrame i tak zatrzymuje się w ukrytej karcie,
    // więc wystarczy wyłączać pętlę, gdy hero jest poza ekranem.
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    io.observe(root);
  }

  return {
    setPaused(value: boolean) {
      paused = value;
    },
  };
}
