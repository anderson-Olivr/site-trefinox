/* ==========================================================
   TREFINOX — produtos.js (catálogo 5 x 10 = 50 produtos)
   ========================================================== */

const WHATSAPP_NUMBER = "5511958820100";

/* ----------------------------------------------------------
   DADOS (provisórios) — 10 famílias x 5 modelos = 50 cards.
   Para colocar foto: preencha "image" (ex.: "static/img/produtos/microtubo-1.jpg").
   Para editar um produto específico, altere o array "products" depois de gerado.
   ---------------------------------------------------------- */
const families = [
  { name: "Microtubos de Aço Inox", icon: "fa-microscope",     material: "Aço inoxidável",   use: "Linha médica e automotiva" },
  { name: "Tubos Capilares",        icon: "fa-grip-lines",     material: "Aço inoxidável",   use: "Instrumentação e precisão" },
  { name: "Tubos em Barra",         icon: "fa-bars-staggered", material: "Inox / não ferrosos", use: "Industrial e mecânica" },
  { name: "Tubos em Rolo",          icon: "fa-circle-notch",   material: "Inox / não ferrosos", use: "Troca térmica e refrigeração" },
  { name: "Tubos de Cobre",         icon: "fa-bolt",           material: "Cobre",            use: "Refrigeração e aquecimento" },
  { name: "Tubos de Latão",         icon: "fa-faucet",         material: "Latão",            use: "Hidráulica e conexões" },
  { name: "Tubos de Alumínio",      icon: "fa-feather",        material: "Alumínio",         use: "Aplicações leves" },
  { name: "Tubos de Tombak",        icon: "fa-ring",           material: "Tombak",           use: "Aplicações decorativas e técnicas" },
  { name: "Peças Curvadas",         icon: "fa-bezier-curve",   material: "Sob consulta",     use: "Curvatura e conformação" },
  { name: "Peças Usinadas",         icon: "fa-gears",          material: "Sob consulta",     use: "Usinagem de precisão" },
];

const MODELS_PER_FAMILY = 5;

const products = families.flatMap((family) =>
  Array.from({ length: MODELS_PER_FAMILY }, (_, i) => ({
    family: family.name,
    icon: family.icon,
    name: `${family.name} — Modelo ${i + 1}`,
    desc: "Breve descrição do produto. Substitua por um texto curto com aplicações e diferenciais.",
    image: "", // 🔴 FOTO DO PRODUTO: coloque o caminho da imagem aqui
    specs: [
      ["Material", family.material],
      ["Aplicação", family.use],
      ["Fornecimento", "Sob consulta"],
    ],
  }))
);

/* ----------------------------------------------------------
   TEMPLATE DO CARD
   ---------------------------------------------------------- */
function whatsappLink(text) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
}

function productCard(p) {
  const photo = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="p-img-slot"><i class="fa-solid ${p.icon}"></i><span>FOTO DO PRODUTO</span></div>`;

  const wa = whatsappLink(`Olá, gostaria de informações sobre: ${p.name}`);

  const specs = p.specs
    .map(([k, v]) => `<li><span>${k}</span><strong>${v}</strong></li>`)
    .join("");

  return `
  <article class="p-card" data-view="info">
    <div class="p-flip">

      <!-- FRENTE -->
      <div class="p-face p-front">
        <div class="p-front-inner">
          <div class="p-img">
            ${photo}
            <span class="p-badge">${p.family}</span>
          </div>
          <div class="p-body">
            <h3 class="p-title">${p.name}</h3>
            <p class="p-desc">${p.desc}</p>
            <div class="p-actions">
              <button type="button" class="p-btn p-btn--green" data-action="info">Saiba mais</button>
              <button type="button" class="p-btn p-btn--outline" data-action="quote">Estimar orçamento</button>
            </div>
          </div>
        </div>
      </div>

      <!-- VERSO -->
      <div class="p-face p-back" inert>
        <div class="p-back-inner">
          <span class="p-glow g1"></span><span class="p-glow g2"></span><span class="p-glow g3"></span>

          <!-- Painel: Saiba mais -->
          <div class="p-panel panel-info">
            <button type="button" class="p-back-link" data-action="back"><i class="fa-solid fa-arrow-left"></i> Voltar</button>
            <span class="p-badge p-badge--sm">${p.family}</span>
            <h3 class="p-title p-title--lg">${p.name}</h3>
            <p class="p-desc">${p.desc}</p>
            <ul class="p-specs">${specs}</ul>
            <div class="p-actions">
              <button type="button" class="p-btn p-btn--outline" data-action="quote">Estimar orçamento</button>
              <a class="p-btn p-btn--wa" href="${wa}" target="_blank" aria-label="Falar pelo WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          <!-- Painel: Estimar orçamento (apenas visual, sem cálculo) -->
          <div class="p-panel panel-quote">
            <button type="button" class="p-back-link" data-action="back"><i class="fa-solid fa-arrow-left"></i> Voltar</button>
            <h3 class="p-title p-title--lg">Estimar orçamento</h3>

            <div class="q-form">
              <div class="q-field"><label>Externo mín.</label><input type="number" min="0" step="any" placeholder="mm"></div>
              <div class="q-field"><label>Externo máx.</label><input type="number" min="0" step="any" placeholder="mm"></div>
              <div class="q-field"><label>Espess. mín.</label><input type="number" min="0" step="any" placeholder="mm"></div>
              <div class="q-field"><label>Espess. máx.</label><input type="number" min="0" step="any" placeholder="mm"></div>
              <div class="q-field"><label>Quantidade</label><input type="number" min="0" step="any" placeholder="0"></div>
              <div class="q-field">
                <label>Unidade</label>
                <select>
                  <option>Peça</option>
                  <option>M (metro)</option>
                  <option>Kg (Quilo)</option>
                </select>
              </div>
            </div>

            <div class="q-actions">
              <button type="button" class="p-btn p-btn--green"><i class="fa-solid fa-calculator"></i> Calcular</button>
              <span class="q-contact">Entre em contato para mais informações</span>
              <a class="p-btn p-btn--wa" href="${wa}" target="_blank" aria-label="Falar pelo WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </article>`;
}

/* ----------------------------------------------------------
   RENDER + FLIP
   ---------------------------------------------------------- */
const grid = document.getElementById("catalog-grid");
grid.innerHTML = products.map(productCard).join("");

function flip(card, on) {
  card.classList.toggle("is-flipped", on);
  card.querySelector(".p-front").toggleAttribute("inert", on);
  card.querySelector(".p-back").toggleAttribute("inert", !on);
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const card = btn.closest(".p-card");
  const action = btn.dataset.action;

  if (action === "back") {
    flip(card, false);
    return;
  }

  // só um card virado por vez
  grid.querySelectorAll(".p-card.is-flipped").forEach((c) => {
    if (c !== card) flip(c, false);
  });

  card.dataset.view = action; // "info" ou "quote"
  flip(card, true);
});

// ESC desvira os cards
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    grid.querySelectorAll(".p-card.is-flipped").forEach((c) => flip(c, false));
  }
});