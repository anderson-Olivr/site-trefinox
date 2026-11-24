/* ==========================================================
   TREFINOX — main.js
   ========================================================== */

/* ---------- Menu mobile ---------- */
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

/* ---------- Depoimentos ---------- */
const testimonials = [
  [
    {
      quote: "Estamos muito satisfeitos com a TREFINOX. A qualidade e a durabilidade dos materiais são excepcionais. O serviço de atendimento ao cliente é atencioso e eficaz, sempre prontos para atender às nossas necessidades.",
      author: "Fernanda Gomes",
      role: "Gerente de Compras",
    },
    {
      quote: "Como engenheiro, valorizo fornecedores que entregam o que prometem. A TREFINOX é um desses raros casos. A precisão dos seus tubos e peças de metal é fundamental para o sucesso dos meus projetos. Altamente recomendado.",
      author: "Carlos Eduardo Rocha",
      role: "Engenheiro Industrial",
    },
  ],
  [
    {
      quote: "TREFINOX é sinônimo de qualidade e confiança. Seus produtos, especialmente os microtubos inoxidáveis, são de uma qualidade superior e têm desempenhado um papel crucial em nossas operações.",
      author: "Juliana Pereira",
      role: "Diretora Operacional",
    },
    {
      quote: "A TREFINOX superou todas as nossas expectativas com seus produtos de altíssima qualidade. O atendimento personalizado e a precisão nas peças de aço inoxidável são incomparáveis.",
      author: "Mariana Costa",
      role: "Engenheira de Processos",
    },
  ],
  [
    {
      quote: "Excelência define a TREFINOX! Desde o primeiro contato até a entrega, tudo foi impecável. Os microtubos e peças tubulares se encaixaram perfeitamente em nossos projetos industriais.",
      author: "Roberto Silva",
      role: "Supervisor de Produção",
    },
    {
      quote: "Parceria estratégica indispensável. Prazos cumpridos e controle rigoroso de qualidade em cada amostra e lote fornecido.",
      author: "Marcelo Andrade",
      role: "Gerente de Suprimentos",
    },
  ],
];

function switchTestimonial(index) {
  const container = document.getElementById("testimonial-container");
  const dots = document.querySelectorAll(".dot-indicator");

  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));

  container.innerHTML = testimonials[index]
    .map(
      (item) => `
      <div class="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between transition duration-300">
        <div>
          <div class="flex text-amber-400 mb-4 text-sm">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="text-slate-700 italic text-sm leading-relaxed mb-6">“${item.quote}”</p>
        </div>
        <div class="border-t border-slate-200 pt-4">
          <h4 class="font-bold font-heading text-slate-900">${item.author}</h4>
          <span class="text-xs text-slate-500">${item.role}</span>
        </div>
      </div>`
    )
    .join("");
}