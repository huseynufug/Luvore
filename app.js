/* ============ Məlumat ============ */
const PRODUCTS = [
  {
    id: "noir", name: "Noir Absolu", gender: "uniseks", family: "Şərq", price: 189, tag: "Bestseller",
    notes: { top: "Zəfəran, Çəhrayı istiot", heart: "Oud, Qızılgül", base: "Ənbər, Müşk, Paçuli" },
    desc: "Luvoré-nin imza ətri. Qaranlıq, məxməri oud zəfəranın isti parıltısı ilə açılır — gecənin qızılı.",
    longevity: 5, sillage: 5, shape: "tall", cap: "facet", liquid: "#5a2a08", tint: "#6b4a12"
  },
  {
    id: "or", name: "Or Sacré", gender: "qadın", family: "Çiçəkli", price: 175, tag: "Yeni",
    notes: { top: "Bergamot, Armud", heart: "Jasmin sambac, Tuberoza", base: "Burbon vanili, Ağ müşk" },
    desc: "Günəşli jasmin və qızılı vanil. Zərif, işıqlı və hər addımda hiss olunan bir aura.",
    longevity: 4, sillage: 4, shape: "arch", cap: "sphere", liquid: "#c7922f", tint: "#8a6a1e"
  },
  {
    id: "ambre", name: "Velours d'Ambre", gender: "uniseks", family: "Ənbər", price: 165,
    notes: { top: "Mandarin, Kardamon", heart: "Labdanum, Benzoin", base: "Tonka, Ənbər, Kəhrəba" },
    desc: "Məxmər kimi yumşaq ənbər. Soyuq axşamlarda dəriyə sarılan isti bir şal.",
    longevity: 5, sillage: 3, shape: "square", cap: "cylinder", liquid: "#9a4f12", tint: "#7a3f10"
  },
  {
    id: "rose", name: "Rose de Minuit", gender: "qadın", family: "Çiçəkli", price: 179, tag: "Bestseller",
    notes: { top: "Qara qarağat, Litçi", heart: "Türk qızılgülü, Pion", base: "Paçuli, Kaşmir ağacı" },
    desc: "Gecəyarısı açan qızılgül — tünd meyvələr və paçuli ilə dərinləşən romantik bir kompozisiya.",
    longevity: 4, sillage: 4, shape: "round", cap: "facet", liquid: "#7a1f35", tint: "#7a2e3a"
  },
  {
    id: "cuir", name: "Cuir Impérial", gender: "kişi", family: "Odunsu", price: 185,
    notes: { top: "Qara istiot, Elemi", heart: "Dəri, Tütün yarpağı", base: "Vetiver, Sidr, Qayın qatranı" },
    desc: "Tüstülü dəri və tütün. Özünə əmin, sakit güclü bir xarakter üçün.",
    longevity: 5, sillage: 4, shape: "square", cap: "facet", liquid: "#3b2414", tint: "#3d2a18"
  },
  {
    id: "bleu", name: "Bleu Caspien", gender: "kişi", family: "Təravətli", price: 155, tag: "Yay seçimi",
    notes: { top: "Kalabriya limonu, Dəniz duzu", heart: "Ada çayı, Neroli", base: "Ambroksan, Vetiver" },
    desc: "Xəzərin sahilində səhər küləyi. Duzlu, təmiz və enerjili — gündəlik imza.",
    longevity: 3, sillage: 3, shape: "tall", cap: "cylinder", liquid: "#2d6a86", tint: "#1d3a4a"
  },
  {
    id: "santal", name: "Santal Lumière", gender: "uniseks", family: "Odunsu", price: 169,
    notes: { top: "Əncir yarpağı, Kokos südü", heart: "Səndəl ağacı, Süsən", base: "Kremli müşk, Kaşmeran" },
    desc: "Südlü, kremli səndəl ağacı. Sakit, isti və bağımlılıq yaradan bir \"dəri ətri\".",
    longevity: 4, sillage: 2, shape: "arch", cap: "cylinder", liquid: "#c9a57a", tint: "#6e5638"
  },
  {
    id: "bakou", name: "Jardin de Bakou", gender: "uniseks", family: "Şərq", price: 195, tag: "Məhdud",
    notes: { top: "Nar, Heyva", heart: "Zəfəran, Gülab", base: "Oud, Kəhrəba, Ənbər" },
    desc: "Abşeron bağlarına ehtiram: nar, heyva və zəfəran. Azərbaycanın ruhu bir şüşədə.",
    longevity: 5, sillage: 4, shape: "round", cap: "sphere", liquid: "#8e1c22", tint: "#5e1a1c"
  }
];

const SIZES = [
  { ml: 30, factor: 0.65 },
  { ml: 50, factor: 1 },
  { ml: 100, factor: 1.55 }
];
const DISCOVERY = { id: "discovery", name: "Kəşf dəsti", price: 45, tint: "#6b4a12" };
const FREE_SHIP = 150;
const GIFT_PRICE = 5;

const priceFor = (p, ml) => Math.round(p.price * SIZES.find(s => s.ml === ml).factor);
const fmt = n => `${n} ₼`;
const byId = id => PRODUCTS.find(p => p.id === id);
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ============ SVG şüşə generatoru ============ */
let svgSeq = 0;
function bottleSVG(p, opts = {}) {
  const u = "g" + (++svgSeq);
  const shapes = {
    tall:   { body: `<rect x="34" y="66" width="52" height="126" rx="3"/>`, neckY: 54, fill: 92 },
    square: { body: `<rect x="20" y="96" width="80" height="96" rx="6"/>`, neckY: 84, fill: 112 },
    round:  { body: `<path d="M60 86c26 0 42 22 42 52s-16 54-42 54-42-24-42-54 16-52 42-52z"/>`, neckY: 76, fill: 110 },
    arch:   { body: `<path d="M28 192V104c0-20 14-36 32-36s32 16 32 36v88z"/>`, neckY: 56, fill: 100 }
  };
  const s = shapes[p.shape] || shapes.tall;
  const ty = s.neckY;
  const caps = {
    facet: `<polygon points="44,${ty} 76,${ty} 84,${ty - 12} 73,${ty - 28} 47,${ty - 28} 36,${ty - 12}" fill="url(#${u}c)" stroke="#f6dfa4" stroke-width=".6"/>
            <path d="M47 ${ty - 28}L54 ${ty - 12}L60 ${ty}M73 ${ty - 28}L66 ${ty - 12}L60 ${ty}M36 ${ty - 12}H84M54 ${ty - 12}L60 ${ty - 28}L66 ${ty - 12}" stroke="#fff6dc" stroke-opacity=".5" stroke-width=".5" fill="none"/>`,
    cylinder: `<rect x="45" y="${ty - 34}" width="30" height="34" rx="2" fill="url(#${u}g)"/>
               <rect x="49" y="${ty - 34}" width="4" height="34" fill="#fff6dc" opacity=".35"/>`,
    sphere: `<circle cx="60" cy="${ty - 17}" r="17" fill="url(#${u}c)" stroke="#f6dfa4" stroke-width=".6"/>
             <ellipse cx="54" cy="${ty - 23}" rx="5" ry="3" fill="#fff" opacity=".45"/>`
  };
  const label = opts.label === false ? "" : `
    <g font-family="Cinzel, serif" text-anchor="middle" fill="#f1d79a">
      <text x="60" y="${s.fill + 38}" font-size="7.5" letter-spacing="2.4">LUVORÉ</text>
      <line x1="48" x2="72" y1="${s.fill + 43}" y2="${s.fill + 43}" stroke="#d4af69" stroke-width=".4"/>
      <text x="60" y="${s.fill + 51}" font-size="4.4" letter-spacing="1" font-family="Jost, sans-serif">${(p.name || "").toUpperCase()}</text>
    </g>`;

  return `<svg class="bottle-svg" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name || "Luvoré"} şüşəsi">
    <defs>
      <linearGradient id="${u}l" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${p.liquid}" stop-opacity=".55"/>
        <stop offset="1" stop-color="${p.liquid}"/>
      </linearGradient>
      <linearGradient id="${u}s" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#fff" stop-opacity=".28"/>
        <stop offset=".25" stop-color="#fff" stop-opacity=".04"/>
        <stop offset=".8" stop-color="#fff" stop-opacity=".02"/>
        <stop offset="1" stop-color="#fff" stop-opacity=".2"/>
      </linearGradient>
      <linearGradient id="${u}g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#8a6526"/><stop offset=".35" stop-color="#f6dfa4"/>
        <stop offset=".6" stop-color="#c99c4d"/><stop offset="1" stop-color="#6e4f1c"/>
      </linearGradient>
      <linearGradient id="${u}c" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fff3d0" stop-opacity=".95"/><stop offset=".5" stop-color="#d9b46a" stop-opacity=".85"/>
        <stop offset="1" stop-color="#7a5a24" stop-opacity=".9"/>
      </linearGradient>
      <clipPath id="${u}k">${s.body}</clipPath>
      <radialGradient id="${u}r" cx=".5" cy=".5" r=".5">
        <stop offset="0" stop-color="#000" stop-opacity=".5"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="60" cy="195" rx="46" ry="5" fill="url(#${u}r)"/>
    <g clip-path="url(#${u}k)">
      <rect x="0" y="0" width="120" height="200" fill="#fff" opacity=".05"/>
      <rect x="0" y="${s.fill}" width="120" height="${200 - s.fill}" fill="url(#${u}l)"/>
      <rect x="0" y="${s.fill}" width="120" height="1.2" fill="#fff" opacity=".35"/>
      <rect x="0" y="0" width="120" height="200" fill="url(#${u}s)"/>
    </g>
    <g fill="none" stroke="#d4af69" stroke-width="1.1" opacity=".9">${s.body}</g>
    <rect x="50" y="${ty}" width="20" height="12" fill="url(#${u}g)"/>
    ${caps[p.cap] || caps.cylinder}
    ${label}
  </svg>`;
}

/* ============ Saxlama ============ */
const store = {
  get(k, d) { try { const v = localStorage.getItem("luvore:" + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem("luvore:" + k, JSON.stringify(v)); } catch {} }
};
let cart = store.get("cart", []);
let wish = store.get("wish", []);
let giftWrap = store.get("gift", false);

/* ============ Toast ============ */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ============ Mağaza ============ */
const filters = { gender: "all", family: "all", sort: "featured" };

function renderGrid() {
  let list = PRODUCTS.filter(p =>
    (filters.gender === "all" || p.gender === filters.gender) &&
    (filters.family === "all" || p.family === filters.family));
  if (filters.sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
  if (filters.sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
  if (filters.sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

  $("#productGrid").innerHTML = list.map((p, i) => `
    <article class="card" style="--tint:${p.tint}; animation-delay:${i * 60}ms">
      <div class="card__media" data-open="${p.id}">
        ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ""}
        <div class="card__bottle">${bottleSVG(p)}</div>
        <button class="card__quick" data-quick="${p.id}"><span class="q-long">Səbətə at · 50 ml</span><span class="q-short">+ Səbətə</span></button>
      </div>
      <button class="icon-btn card__wish ${wish.includes(p.id) ? "on" : ""}" data-wish="${p.id}" aria-label="Seçilmişlərə əlavə et">
        <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>
      </button>
      <div class="card__info">
        <div>
          <h3 class="card__name" data-open="${p.id}">${p.name}</h3>
          <p class="card__notes">${p.family} · ${p.notes.heart}</p>
        </div>
        <div class="card__price">${fmt(p.price)}<small>50 ML</small></div>
      </div>
    </article>`).join("");
  $("#emptyState").hidden = list.length > 0;
}

function setGender(g) {
  filters.gender = g;
  $$("#genderChips .chip").forEach(c => c.classList.toggle("is-active", c.dataset.value === g));
  renderGrid();
}

/* ============ Məhsul pəncərəsi ============ */
let modalState = null;

function openProduct(id) {
  const p = byId(id);
  if (!p) return;
  modalState = { id, ml: 50, qty: 1 };
  const meter = (label, n) => `<div class="meter"><span>${label}</span><div class="meter__bar">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</div></div>`;
  $("#modalContent").style.setProperty("--tint", p.tint);
  $("#modalContent").innerHTML = `
    <div class="modal__media">${bottleSVG(p)}</div>
    <div class="modal__info">
      <p class="modal__meta">${p.family} · ${p.gender} · Extrait de Parfum</p>
      <h2>${p.name}</h2>
      <p class="modal__desc">${p.desc}</p>
      <dl class="pyramid">
        <div><dt>Üst notlar</dt><dd>${p.notes.top}</dd></div>
        <div><dt>Ürək notları</dt><dd>${p.notes.heart}</dd></div>
        <div><dt>Baza notları</dt><dd>${p.notes.base}</dd></div>
      </dl>
      ${meter("Davamlılıq", p.longevity)}
      ${meter("İz (sillage)", p.sillage)}
      <div class="sizes">
        ${SIZES.map(s => `<button class="size ${s.ml === 50 ? "is-active" : ""}" data-size="${s.ml}">${s.ml} ml<small>${fmt(priceFor(p, s.ml))}</small></button>`).join("")}
      </div>
      <div class="modal__buy">
        <div class="qty"><button data-mq="-1" aria-label="Azalt">−</button><span id="mQty">1</span><button data-mq="1" aria-label="Artır">+</button></div>
        <button class="btn btn--gold" id="mAdd">Səbətə əlavə et — <span id="mPrice">${fmt(p.price)}</span></button>
      </div>
      <label class="engrave">Həkk etmə:<input type="text" id="mEngrave" maxlength="16" placeholder="Ad və ya tarix (pulsuz)"></label>
    </div>`;
  openLayer("#productModal");
}

function updateModalPrice() {
  const p = byId(modalState.id);
  $("#mQty").textContent = modalState.qty;
  $("#mPrice").textContent = fmt(priceFor(p, modalState.ml) * modalState.qty);
}

/* ============ Səbət ============ */
function addToCart(id, ml = 50, qty = 1, engrave = "") {
  const key = `${id}|${ml}|${engrave}`;
  const line = cart.find(l => l.key === key);
  if (line) line.qty += qty;
  else cart.push({ key, id, ml, qty, engrave });
  saveCart();
  const name = id === "discovery" ? DISCOVERY.name : byId(id).name;
  toast(`${name} səbətə əlavə olundu`);
  bump("#cartCount");
}

function linePrice(l) {
  return l.id === "discovery" ? DISCOVERY.price * l.qty : priceFor(byId(l.id), l.ml) * l.qty;
}

function saveCart() {
  store.set("cart", cart);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((n, l) => n + l.qty, 0);
  const subtotal = cart.reduce((n, l) => n + linePrice(l), 0);
  const total = subtotal + (giftWrap && cart.length ? GIFT_PRICE : 0);
  setBadge("#cartCount", count);

  $("#cartItems").innerHTML = cart.length ? cart.map(l => {
    const p = l.id === "discovery"
      ? { ...DISCOVERY, liquid: "#9a6a20", shape: "tall", cap: "cylinder" }
      : byId(l.id);
    const meta = l.id === "discovery" ? "8 × 2 ml" : `${l.ml} ml · Extrait`;
    return `
      <div class="line" style="--tint:${p.tint}">
        <div class="line__img" ${l.id !== "discovery" ? `data-open="${l.id}"` : ""}>${bottleSVG(p, { label: false })}</div>
        <div>
          <h4>${p.name}</h4>
          <small>${meta}</small>
          ${l.engrave ? `<small>Həkk: “${escapeHtml(l.engrave)}”</small>` : ""}
          <div class="qty"><button data-q="-1" data-key="${l.key}" aria-label="Azalt">−</button><span>${l.qty}</span><button data-q="1" data-key="${l.key}" aria-label="Artır">+</button></div>
        </div>
        <div class="line__right">
          <strong>${fmt(linePrice(l))}</strong>
          <button class="remove" data-remove="${l.key}">Sil</button>
        </div>
      </div>`;
  }).join("") : `
    <div class="drawer__empty">
      <p>Səbətiniz boşdur</p>
      <a href="#shop" class="btn btn--ghost" data-close-link>Ətirlərə bax</a>
    </div>`;

  const left = FREE_SHIP - subtotal;
  $("#shippingText").innerHTML = left > 0
    ? `Pulsuz çatdırılmaya <strong>${fmt(left)}</strong> qalıb`
    : `<strong>Təbriklər!</strong> Sifarişiniz pulsuz çatdırılacaq`;
  $("#shippingFill").style.width = Math.min(100, (subtotal / FREE_SHIP) * 100) + "%";
  $("#giftWrap").checked = giftWrap;
  $("#cartTotal").textContent = fmt(total);
  $("#checkoutBtn").disabled = !cart.length;
  $("#checkoutBtn").style.opacity = cart.length ? 1 : .5;
}

/* ============ Seçilmişlər ============ */
function toggleWish(id) {
  const on = !wish.includes(id);
  wish = on ? [...wish, id] : wish.filter(w => w !== id);
  store.set("wish", wish);
  $$(`[data-wish="${id}"]`).forEach(b => b.classList.toggle("on", on));
  renderWish();
  if (on) { toast(`${byId(id).name} seçilmişlərə əlavə olundu`); bump("#wishCount"); }
}

function renderWish() {
  setBadge("#wishCount", wish.length);
  $("#wishItems").innerHTML = wish.length ? wish.map(id => {
    const p = byId(id);
    return `
      <div class="line" style="--tint:${p.tint}">
        <div class="line__img" data-open="${p.id}">${bottleSVG(p, { label: false })}</div>
        <div><h4>${p.name}</h4><small>${p.family} · ${fmt(p.price)}</small></div>
        <div class="line__right">
          <button class="remove" data-quick="${p.id}">Səbətə at</button>
          <button class="remove" data-wish="${p.id}">Sil</button>
        </div>
      </div>`;
  }).join("") : `<div class="drawer__empty"><p>Hələ heç nə seçməmisiniz</p><a href="#shop" class="btn btn--ghost" data-close-link>Ətirlərə bax</a></div>`;
}

function setBadge(sel, n) {
  const b = $(sel);
  b.textContent = n;
  b.classList.toggle("show", n > 0);
}
function bump(sel) {
  const b = $(sel);
  b.classList.remove("bump");
  void b.offsetWidth;
  b.classList.add("bump");
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ============ Laylar (drawer / modal / axtarış) ============ */
const LAYERS = ["#cartDrawer", "#wishDrawer", "#productModal", "#searchPanel"];
function openLayer(sel) {
  LAYERS.forEach(l => l !== sel && $(l).classList.remove("open"));
  $(sel).classList.add("open");
  $("#overlay").classList.add("show");
  document.body.classList.add("locked");
  closeMobileNav();
}
function closeLayers() {
  LAYERS.forEach(l => $(l).classList.remove("open"));
  $("#overlay").classList.remove("show");
  document.body.classList.remove("locked");
}
function closeMobileNav() {
  $("#mobileNav").classList.remove("open");
  $("#burgerBtn").classList.remove("open");
}

/* ============ Axtarış ============ */
function renderSearch(q) {
  const norm = s => s.toLocaleLowerCase("az");
  const term = norm(q.trim());
  const hits = term
    ? PRODUCTS.filter(p => norm([p.name, p.family, p.gender, p.notes.top, p.notes.heart, p.notes.base].join(" ")).includes(term))
    : PRODUCTS;
  $("#searchResults").innerHTML = hits.length ? hits.map(p => `
    <button class="search__hit" data-open="${p.id}" style="--tint:${p.tint}">
      <div class="line__img">${bottleSVG(p, { label: false })}</div>
      <div><strong>${p.name}</strong><small>${p.family} · ${fmt(p.price)}</small></div>
    </button>`).join("") : `<p class="search__empty">“${escapeHtml(q)}” üzrə nəticə tapılmadı.</p>`;
}

/* ============ Ətir tapıcı ============ */
const QUIZ = [
  {
    q: "Ətri kimin üçün seçirsiniz?",
    opts: [
      { t: "Özüm üçün", s: "Qadın ətirləri", w: { gender: "qadın" } },
      { t: "Özüm üçün", s: "Kişi ətirləri", w: { gender: "kişi" } },
      { t: "Hədiyyə", s: "Hər kəsə uyğun", w: { gender: "uniseks" } },
      { t: "Fərq etməz", s: "Sərhədsiz seçim", w: {} }
    ]
  },
  {
    q: "Hansı notlar sizi cəlb edir?",
    opts: [
      { t: "Çiçəklər", s: "Qızılgül, jasmin", w: { "Çiçəkli": 3 } },
      { t: "Ədviyyat və oud", s: "Zəfəran, Şərq", w: { "Şərq": 3, "Ənbər": 1 } },
      { t: "Odun və dəri", s: "Səndəl, tütün", w: { "Odunsu": 3 } },
      { t: "Sitrus və dəniz", s: "Təmiz, təravətli", w: { "Təravətli": 3 } }
    ]
  },
  {
    q: "Ətir hansı anı tamamlamalıdır?",
    opts: [
      { t: "Gündəlik", s: "Ofis, gəzinti", w: { "Təravətli": 2, "Çiçəkli": 1, "Odunsu": 1 } },
      { t: "Romantik axşam", s: "Şam yeməyi, görüş", w: { "Çiçəkli": 2, "Ənbər": 2 } },
      { t: "Xüsusi gecə", s: "Toy, qala", w: { "Şərq": 2, "Odunsu": 1 } },
      { t: "Soyuq günlər", s: "Payız, qış", w: { "Ənbər": 2, "Şərq": 1, "Odunsu": 1 } }
    ]
  }
];
let quizAnswers = [];

function renderQuiz() {
  const step = quizAnswers.length;
  $("#quizBar").style.width = (step / QUIZ.length) * 100 + "%";
  const stage = $("#quizStage");
  stage.style.animation = "none"; void stage.offsetWidth; stage.style.animation = "";

  if (step < QUIZ.length) {
    const item = QUIZ[step];
    stage.innerHTML = `
      <p class="quiz__step">Sual ${step + 1} / ${QUIZ.length}</p>
      <h3 class="quiz__q">${item.q}</h3>
      <div class="quiz__opts">
        ${item.opts.map((o, i) => `<button class="quiz__opt" data-ans="${i}"><strong>${o.t}</strong><span>${o.s}</span></button>`).join("")}
      </div>`;
    return;
  }

  const weights = quizAnswers.map((a, i) => QUIZ[i].opts[a].w);
  const gender = weights[0].gender;
  const scored = PRODUCTS.map(p => {
    let score = 0;
    weights.slice(1).forEach(w => score += w[p.family] || 0);
    if (gender) score += p.gender === gender ? 3 : p.gender === "uniseks" ? 1 : -4;
    return { p, score };
  }).sort((a, b) => b.score - a.score);
  const best = scored[0].p;
  const alt = scored[1].p;

  stage.innerHTML = `
    <p class="quiz__step">Sizin ətriniz</p>
    <div class="quiz__result" style="--tint:${best.tint}">
      <div class="bottle">${bottleSVG(best)}</div>
      <div>
        <h3>${best.name}</h3>
        <p>${best.desc}<br><small>Alternativ: <a href="#" data-open="${alt.id}" style="color:var(--gold-light)">${alt.name}</a></small></p>
        <div class="quiz__actions">
          <button class="btn btn--gold" data-open="${best.id}">Ətri kəşf et</button>
          <button class="btn btn--ghost" id="quizRestart">Yenidən başla</button>
        </div>
      </div>
    </div>`;
}

/* ============ Kəşf dəsti vizualı ============ */
function renderDiscovery() {
  $("#discoveryVisual").innerHTML = PRODUCTS.map(p =>
    `<div class="vial">${bottleSVG({ ...p, shape: "tall", cap: "cylinder", name: "" }, { label: false })}</div>`
  ).join("");
}

/* ============ Kolleksiya kartlarındakı şüşələr ============ */
function renderCollectionArt() {
  $$("[data-bottle]").forEach(el => { el.innerHTML = bottleSVG(byId(el.dataset.bottle)); });
}

/* ============ Elan zolağı ============ */
function startAnnounce() {
  const items = $$("#announceTrack span");
  let i = 0;
  items[0].classList.add("active");
  setInterval(() => {
    const cur = items[i];
    cur.classList.replace("active", "leave");
    setTimeout(() => {
      cur.style.transition = "none";
      cur.classList.remove("leave");
      void cur.offsetWidth;
      cur.style.transition = "";
    }, 700);
    i = (i + 1) % items.length;
    items[i].classList.add("active");
  }, 4000);
}

/* ============ Hadisələr ============ */
document.addEventListener("click", e => {
  const t = e.target;
  const el = sel => t.closest(sel);

  if (el("[data-quick]")) {
    e.stopPropagation();
    addToCart(el("[data-quick]").dataset.quick, 50, 1);
    return;
  }
  if (el("[data-wish]")) { toggleWish(el("[data-wish]").dataset.wish); return; }
  if (el("[data-open]")) { e.preventDefault(); openProduct(el("[data-open]").dataset.open); return; }
  if (el("[data-close]") || t.id === "overlay") { closeLayers(); return; }
  if (el("[data-close-link]")) { closeLayers(); return; }

  if (el("[data-remove]")) {
    cart = cart.filter(l => l.key !== el("[data-remove]").dataset.remove);
    saveCart();
    return;
  }
  if (el("[data-q]")) {
    const b = el("[data-q]");
    const line = cart.find(l => l.key === b.dataset.key);
    line.qty += Number(b.dataset.q);
    if (line.qty <= 0) cart = cart.filter(l => l !== line);
    saveCart();
    return;
  }

  // Modal daxili
  if (el("[data-size]")) {
    modalState.ml = Number(el("[data-size]").dataset.size);
    $$(".size").forEach(s => s.classList.toggle("is-active", Number(s.dataset.size) === modalState.ml));
    updateModalPrice();
    return;
  }
  if (el("[data-mq]")) {
    modalState.qty = Math.max(1, modalState.qty + Number(el("[data-mq]").dataset.mq));
    updateModalPrice();
    return;
  }
  if (t.closest("#mAdd")) {
    addToCart(modalState.id, modalState.ml, modalState.qty, $("#mEngrave").value.trim());
    closeLayers();
    return;
  }

  // Quiz
  if (el("[data-ans]")) { quizAnswers.push(Number(el("[data-ans]").dataset.ans)); renderQuiz(); return; }
  if (t.closest("#quizRestart")) { quizAnswers = []; renderQuiz(); return; }

  // Kolleksiya kartları → filtr
  if (el(".collection")) { setGender(el(".collection").dataset.gender); }

  // Mobil menyu linkləri
  if (el(".mobile-nav a")) closeMobileNav();
});

$("#cartBtn").addEventListener("click", () => openLayer("#cartDrawer"));
$("#wishBtn").addEventListener("click", () => openLayer("#wishDrawer"));
$("#searchBtn").addEventListener("click", () => {
  openLayer("#searchPanel");
  renderSearch($("#searchInput").value);
  setTimeout(() => $("#searchInput").focus(), 300);
});
$("#searchInput").addEventListener("input", e => renderSearch(e.target.value));
$("#burgerBtn").addEventListener("click", () => {
  $("#mobileNav").style.top = $("#header").getBoundingClientRect().bottom + "px";
  $("#mobileNav").classList.toggle("open");
  $("#burgerBtn").classList.toggle("open");
});
$("#genderChips").addEventListener("click", e => {
  const c = e.target.closest(".chip");
  if (c) setGender(c.dataset.value);
});
$("#familySelect").addEventListener("change", e => { filters.family = e.target.value; renderGrid(); });
$("#sortSelect").addEventListener("change", e => { filters.sort = e.target.value; renderGrid(); });
$("#giftWrap").addEventListener("change", e => { giftWrap = e.target.checked; store.set("gift", giftWrap); renderCart(); });
$("#addDiscovery").addEventListener("click", () => addToCart("discovery", 0, 1));
$("#checkoutBtn").addEventListener("click", () => toast("Demo: ödəniş sistemi hələ qoşulmayıb"));
$("#newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  e.target.reset();
  toast("Təşəkkürlər! 10% endirim kodu e-poçtunuza göndəriləcək");
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLayers(); });

window.addEventListener("scroll", () => {
  $("#header").classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => io.observe(el));

/* ============ Başlat ============ */
renderGrid();
renderCart();
renderWish();
renderQuiz();
renderDiscovery();
renderCollectionArt();
startAnnounce();
