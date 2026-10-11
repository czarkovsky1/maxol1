// Kropla oleju Maxol: raymarching pola odległości (SDF).
// Kształt liczony matematycznie, bez modelu 3D. Materiał: załamanie światła
// (IOR oleju 1,47), pochłanianie zależne od grubości (Beer–Lambert),
// odbicia studyjnych softboxów, Fresnel. Na końcu: biała „tafla” następnej sekcji.

precision highp float;

uniform vec2 uRes;
uniform float uTime;
uniform float uCamZ;
uniform float uTanFov;

uniform vec3 uDropPos;
uniform float uScale;
uniform vec2 uJelly;
uniform float uPull;
uniform vec3 uPointer;
uniform vec4 uDroplets[5];

uniform float uStreamOn;
uniform float uStreamX;
uniform float uStreamTop;
uniform float uStreamBottom;
uniform float uStreamR0;
uniform float uStreamR1;

uniform vec3 uBoundsMin;
uniform vec3 uBoundsMax;
uniform vec2 uDropScreen;
uniform float uIntro;

uniform float uLevel;
uniform float uImpactX;
uniform float uRipple;
uniform float uSwell;
uniform float uTint;
uniform float uSurfaceRefl;
uniform float uSag;

const float IOR = 1.47;
const vec3 SIGMA = vec3(0.14, 1.25, 5.2); // złoty, przezroczysty olej (grubiej → bursztyn) // pochłanianie: niebieski znika pierwszy → złoto → bursztyn

float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

// Zaokrąglony stożek (iq): kula r1 u podstawy, kula r2 na wysokości h.
float sdRoundCone(vec3 p, float r1, float r2, float h) {
  float b = (r1 - r2) / h;
  float a = sqrt(1.0 - b * b);
  vec2 q = vec2(length(p.xz), p.y);
  float k = dot(q, vec2(-b, a));
  if (k < 0.0) return length(q) - r1;
  if (k > a * h) return length(q - vec2(0.0, h)) - r2;
  return dot(q, vec2(a, b)) - r1;
}

// Kropla jak w logo Maxol: dół to kula, góra to smukły „dziubek” o wklęsłych
// bokach. Profil dziubka r(y) = A·(T − y)^K jest styczny do kuli w y0 = 0,72,
// więc przejście jest gładkie (bez szwu w załamaniu światła). Proporcje jak w logo:
// wysokość ≈ 1,43 szerokości.
float sdTeardrop(vec3 s) {
  const float R = 0.42;
  const float Y0 = 0.72;
  const float K = 1.7;
  const float T = 1.8571;
  const float A = 0.5578;
  vec3 u = s / R;
  vec2 q = vec2(length(u.xz), u.y);
  float dSphere = length(q) - 1.0;
  float dTip;
  if (q.y >= T) {
    dTip = length(q - vec2(0.0, T));
  } else {
    float h = T - q.y;
    float rp = A * pow(h, K);
    float drp = K * A * pow(h, K - 1.0);
    dTip = (q.x - rp) / sqrt(1.0 + drp * drp);
  }
  // Stopniowe przejście kula → dziubek (bez skoku krzywizny, więc bez szwu w świetle)
  float d = mix(dSphere, dTip, smoothstep(Y0 - 0.5, Y0 + 0.22, q.y));
  return d * R - 0.004; // minimalne zaokrąglenie czubka
}

float map(vec3 p) {
  vec3 q = p - uDropPos;

  // Lepka bezwładność: czubek kropli „spóźnia się” za ruchem
  float w = clamp((q.y / uScale + 0.35) / 1.1, 0.0, 1.0);
  q.xy -= uJelly * w * w;

  vec3 s = q / uScale;
  // przy przelewaniu dół kropli wyciąga się jak lepka ciecz
  float stretch = 1.0 + 0.32 * uSag;
  if (s.y < 0.0) s.y /= stretch;
  float d = sdTeardrop(s) * uScale;

  // Leniwe falowanie powierzchni (gęsty olej, niskie częstotliwości)
  float t = uTime;
  float n = sin(s.x * 4.1 + t * 0.9) * sin(s.y * 3.3 - t * 0.7) * sin(s.z * 4.7 + t * 0.5);
  n += 0.45 * sin(s.x * 7.3 - t * 1.3 + s.y * 2.0) * sin(s.z * 6.1 + t * 1.1);
  d += n * 0.011 * uScale;

  // Przyciąganie do kursora
  vec3 dp = q - uPointer;
  d -= uPull * exp(-dot(dp, dp) / (0.085 * uScale * uScale));

  // Kropelki, które odrywają się i zlewają z powrotem
  for (int i = 0; i < 5; i++) {
    vec4 dr = uDroplets[i];
    d = smin(d, length(q - dr.xyz) - dr.w, 0.12 * uScale);
  }

  // Struga przy przewijaniu
  if (uStreamOn > 0.001) {
    vec3 sp = p - vec3(uStreamX, uStreamBottom, uDropPos.z);
    sp.x += sin(p.y * 6.0 + t * 3.5) * 0.005 * uStreamOn;
    float len = max(uStreamTop - uStreamBottom, 0.002);
    float ds = sdRoundCone(sp, uStreamR1, uStreamR0, len);
    d = smin(d, ds, 0.2 * uScale);
  }

  return d;
}

vec3 calcNormal(vec3 p) {
  const vec2 k = vec2(1.0, -1.0);
  const float h = 0.0012;
  return normalize(
    k.xyy * map(p + k.xyy * h) +
    k.yyx * map(p + k.yyx * h) +
    k.yxy * map(p + k.yxy * h) +
    k.xxx * map(p + k.xxx * h)
  );
}

vec2 boxHit(vec3 ro, vec3 rd, vec3 bmin, vec3 bmax) {
  vec3 inv = 1.0 / rd;
  vec3 t0 = (bmin - ro) * inv;
  vec3 t1 = (bmax - ro) * inv;
  vec3 tmin = min(t0, t1);
  vec3 tmax = max(t0, t1);
  return vec2(max(max(tmin.x, tmin.y), tmin.z), min(min(tmax.x, tmax.y), tmax.z));
}

// Softbox w przestrzeni kierunków (azymut, elewacja): zaokrąglony prostokąt
// z miękkim spadkiem jasności od środka, jak prawdziwa lampa studyjna.
float softbox(vec3 dir, vec2 c, vec2 hs, float soft) {
  float az = atan(dir.x, dir.z);
  float el = asin(clamp(dir.y, -1.0, 1.0));
  vec2 q = abs(vec2(az, el) - c) - hs + soft;
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - soft;
  vec2 rel = (vec2(az, el) - c) / hs;
  float falloff = 1.0 - 0.45 * dot(rel, rel);
  return (1.0 - smoothstep(-soft * 0.6, soft, d)) * max(falloff, 0.0);
}

// Otoczenie widziane w odbiciach: ciemne studio + lampy
vec3 envReflect(vec3 dir) {
  vec3 c = mix(vec3(0.003, 0.008, 0.02), vec3(0.014, 0.04, 0.085), smoothstep(-0.6, 0.8, dir.y));
  // duży dyfuzor nad kroplą: jasny łuk na górze
  c += vec3(1.0, 0.98, 0.95) * 0.22 * smoothstep(0.45, 0.98, dir.y);
  // duża, przygaszona lampa z przodu z lewej: daje kropli objętość
  c += vec3(0.75, 0.8, 0.9) * 0.55 * softbox(dir, vec2(-0.35, 0.25), vec2(0.6, 0.45), 0.25);
  // główna lampa pionowa (długi refleks)
  c += vec3(1.0, 0.97, 0.93) * 7.5 * softbox(dir, vec2(-0.7, 0.3), vec2(0.1, 0.48), 0.06);
  // wąski pas z góry: cienka linia światła na czubku
  c += vec3(1.0, 0.99, 0.97) * 3.2 * softbox(dir, vec2(0.25, 1.18), vec2(0.7, 0.05), 0.05);
  // chłodna kontra z prawej: zarys krawędzi
  c += vec3(0.62, 0.8, 1.0) * 2.4 * softbox(dir, vec2(1.2, 0.1), vec2(0.05, 0.4), 0.04);
  c += vec3(1.0) * 1.1 * uSurfaceRefl * smoothstep(-0.12, -0.45, dir.y);
  return c;
}

// Otoczenie widziane przez olej: ciepły softbox za kroplą. Kropla działa jak
// soczewka: środek „łapie” światło, brzegi załamują promienie w półmrok.
vec3 envTransmit(vec3 dir) {
  // przez olej widać ciemne granatowe studio...
  vec3 c = mix(vec3(0.03, 0.026, 0.024), vec3(0.07, 0.065, 0.06), smoothstep(-0.5, 0.8, dir.y));
  float b = max(dot(dir, normalize(vec3(-0.18, 0.22, -1.0))), 0.0);
  c += vec3(1.0, 0.92, 0.8) * pow(b, 4.0) * 0.5;
  // ...i dwie ostre lampy za kroplą: soczewka pokazuje je w środku jako jasne pasy
  vec3 back = vec3(-dir.x, dir.y, -dir.z);
  c += vec3(1.0, 0.92, 0.78) * 4.2 * softbox(back, vec2(0.16, 0.08), vec2(0.17, 0.3), 0.06);
  c += vec3(1.0, 0.92, 0.78) * 2.2 * softbox(back, vec2(-0.32, 0.2), vec2(0.05, 0.36), 0.04);
  c += vec3(1.0, 0.97, 0.92) * 0.3 * smoothstep(0.45, 0.95, dir.y);
  c += vec3(1.0, 0.9, 0.72) * 0.9 * smoothstep(-0.3, -0.85, dir.y);
  c += vec3(1.0) * 1.2 * uSurfaceRefl * smoothstep(-0.2, -0.55, dir.y);
  return c;
}

// Drobne pęcherzyki powietrza: unoszą się powoli w dolnej, kulistej części kropli.
// Pozycje liczone w shaderze (hash + czas), przecięcie promienia z kulą analitycznie.
const int BUBBLES = 16;

float hash1(float n) { return fract(sin(n * 127.1) * 43758.5453); }

vec4 bubble(int i) {
  float fi = float(i);
  float cycle = fract(hash1(fi + 3.1) + uTime * (0.012 + 0.012 * hash1(fi + 7.7)));
  float ang = hash1(fi + 1.3) * 6.2832;
  float rad = 0.06 + 0.2 * sqrt(hash1(fi + 5.9));
  vec3 c = vec3(cos(ang) * rad, mix(-0.3, 0.28, cycle), sin(ang) * rad);
  c.x += sin(uTime * 0.6 + fi) * 0.012;
  c.z += cos(uTime * 0.5 + fi * 1.7) * 0.012;
  float r = mix(0.004, 0.012, hash1(fi + 9.4) * hash1(fi + 2.2));
  r *= smoothstep(0.0, 0.12, cycle) * (1.0 - smoothstep(0.85, 1.0, cycle)); // pojawia się i znika łagodnie
  return vec4(uDropPos + c * uScale, r * uScale);
}

// Zwraca rgb = kolor pęcherzyka, a = krycie (jasny pierścień na krawędzi, prawie przezroczysty środek)
vec4 traceBubbles(vec3 o, vec3 d, float tmax) {
  float best = tmax;
  vec4 res = vec4(0.0);
  for (int i = 0; i < BUBBLES; i++) {
    vec4 b = bubble(i);
    if (b.w < 1e-4) continue;
    vec3 oc = o - b.xyz;
    float bb = dot(oc, d);
    float cc = dot(oc, oc) - b.w * b.w;
    float h = bb * bb - cc;
    if (h < 0.0) continue;
    float t = -bb - sqrt(h);
    if (t < 0.0 || t > best) continue;
    best = t;
    vec3 n = normalize(o + d * t - b.xyz);
    float cs = abs(dot(d, n));
    float rim = pow(1.0 - cs, 1.6);
    vec3 col = vec3(1.0, 0.95, 0.85) * (0.15 + 1.1 * rim) + envReflect(reflect(d, n)) * 0.35;
    res = vec4(col, clamp(0.04 + rim * 0.55, 0.0, 1.0));
  }
  return res;
}

vec3 shade(vec3 p, vec3 rd) {
  vec3 N = calcNormal(p);
  float cosi = clamp(dot(-rd, N), 0.0, 1.0);
  float F = 0.04 + 0.96 * pow(1.0 - cosi, 5.0);
  vec3 refl = envReflect(reflect(rd, N));

  // Wejście do oleju, przejście przez wnętrze; przy całkowitym wewnętrznym
  // odbiciu promień odbija się od ścianki i szuka kolejnego wyjścia (do 3 odcinków).
  vec3 dir = refract(rd, N, 1.0 / IOR);
  vec3 pos = p - N * 0.003;
  float total = 0.0;
  vec3 trans = vec3(0.0);
  float w = 1.0; // ile światła jeszcze „krąży” w środku
  vec4 bub = vec4(0.0);
  vec3 bubAtt = vec3(1.0);
  for (int bnc = 0; bnc < 3; bnc++) {
    float t = 0.0;
    for (int i = 0; i < 24; i++) {
      float d = -map(pos + dir * t);
      if (d < 0.0008) break;
      t += max(d, 0.005);
    }
    if (bnc == 0) {
      bub = traceBubbles(pos, dir, t);
      bubAtt = exp(-SIGMA * (t * 0.5 / uScale + 0.16));
    }
    pos += dir * t;
    total += t;
    vec3 N2 = calcNormal(pos);
    vec3 R2 = refract(dir, -N2, IOR);
    vec3 att = exp(-SIGMA * (total / uScale + 0.16));
    float Fi = 1.0;
    if (dot(R2, R2) > 0.001) {
      float c = clamp(dot(R2, N2), 0.0, 1.0);
      Fi = 0.036 + 0.964 * pow(1.0 - c, 5.0);
      trans += w * (1.0 - Fi) * envTransmit(R2) * att;
    }
    w *= Fi;
    if (w < 0.02) break;
    dir = reflect(dir, -N2);
    pos -= N2 * 0.003;
  }
  vec3 absorb = exp(-SIGMA * (total / uScale + 0.16));
  trans += w * envTransmit(dir) * absorb * 0.7;
  trans += vec3(0.95, 0.62, 0.12) * 0.025 * (1.0 - absorb.b); // lekka poświata w głębi
  trans = mix(trans, bub.rgb * bubAtt, bub.a);

  return mix(trans, refl, F);
}

vec3 aces(vec3 x) {
  return clamp(x * (2.51 * x + 0.03) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

// Tło sekcji w sRGB: granat marki z delikatnym halo za kroplą
vec3 background(vec2 frag) {
  vec2 uv = frag / uRes;
  vec2 a = vec2(uRes.x / uRes.y, 1.0);
  vec3 navy = vec3(0.0235, 0.169, 0.286);
  vec3 navyL = vec3(0.039, 0.29, 0.486);
  float dh = length((uv - uDropScreen) * a);
  vec3 c = mix(navy, navyL, 0.5 * exp(-dh * dh * 3.2) * uIntro);
  float dg = length((uv - (uDropScreen + vec2(-0.02, -0.22))) * a * vec2(1.0, 1.7));
  c += vec3(0.98, 0.78, 0.05) * 0.05 * exp(-dg * dg * 16.0) * uIntro;
  c *= mix(0.6, 1.0, smoothstep(0.0, 0.95, uv.x * 0.75 + uv.y * 0.8));
  float v = length(uv - 0.5) * 1.25;
  c *= 1.0 - 0.22 * v * v * v;
  return c;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 uv = (frag - 0.5 * uRes) / uRes.y;
  vec3 ro = vec3(0.0, 0.0, uCamZ);
  vec3 rd = normalize(vec3(uv * 2.0 * uTanFov, -1.0));
  float px = 2.0 * uTanFov * uCamZ / uRes.y;

  vec3 col = background(frag);

  vec2 bh = boxHit(ro, rd, uBoundsMin, uBoundsMax);
  if (uIntro > 0.001 && bh.x < bh.y && bh.y > 0.0) {
    float t = max(bh.x, 0.0);
    float minD = 1e9;
    float tMin = t;
    bool hit = false;
    for (int i = 0; i < 80; i++) {
      float d = map(ro + rd * t);
      if (d < minD) { minD = d; tMin = t; }
      if (d < 0.0005) { hit = true; tMin = t; break; }
      t += d * 0.88;
      if (t > bh.y) break;
    }
    // Wygładzanie krawędzi: zasięg pikselowy od najbliższego podejścia promienia
    float alpha = hit ? 1.0 : 1.0 - smoothstep(0.0, px * 1.25, minD);
    if (alpha > 0.0) {
      vec3 lin = shade(ro + rd * tMin, rd);
      vec3 drop = pow(aces(lin * 0.95), vec3(1.0 / 2.2));
      col = mix(col, drop, alpha);
    }
  }

  // Biała tafla następnej sekcji, do której wlewa się struga
  float surface = 0.0;
  if (uLevel > -0.06) {
    vec2 suv = frag / uRes;
    float aspect = uRes.x / uRes.y;
    float dx = abs(suv.x - uImpactX) * aspect;
    float h = uLevel;
    // fale rozchodzą się tylko od miejsca, w które wpada struga
    h += uRipple * 0.011 * exp(-dx * 3.2) * sin(dx * 38.0 - uTime * 6.5);
    h += uRipple * 0.007 * exp(-dx * dx * 700.0);
    h += uSwell * (0.0022 * sin(suv.x * aspect * 4.0 + uTime * 1.1) + 0.0012 * sin(suv.x * aspect * 9.0 - uTime * 1.6));
    float pxs = 1.0 / uRes.y;
    surface = 1.0 - smoothstep(h - pxs, h + pxs, suv.y);
    float dy = h - suv.y;
    // delikatny menisk: cień tuż pod linią tafli, dalej czysta biel sekcji
    vec3 sc = mix(vec3(1.0), vec3(0.9, 0.93, 0.96), exp(-max(dy, 0.0) * uRes.y / 6.0) * uSwell * 0.8);
    sc = mix(sc, vec3(0.98, 0.85, 0.0), uTint * 0.32 * exp(-dx * dx * 36.0 - dy * dy * 80.0) * step(0.0, dy));
    col = mix(col, sc, surface);
  }

  col += (hash(frag + fract(uTime * 0.37) * 311.0) - 0.5) * 0.028 * (1.0 - surface);
  gl_FragColor = vec4(col, 1.0);
}
