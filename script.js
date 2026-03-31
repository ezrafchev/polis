const products = [
  { name: "Raspador Primário Skalper IV", category: "Raspadores Primários" },
  { name: "Raspador Primário Super Skalper", category: "Raspadores Primários" },
  { name: "Raspador Secundário Razor Back", category: "Raspadores Secundários" },
  { name: "Limpador em V-I", category: "Raspadores Secundários" },
  { name: "Mesa Reforçada com Amortecedor", category: "Mesa de Impacto" },
  { name: "Mesa STD Plana Azul", category: "Mesa de Impacto" },
  { name: "Auto Alinhador de Carga", category: "Rolos Auto Alinhadores" },
  { name: "Auto Alinhador de Retorno", category: "Rolos Auto Alinhadores" },
  { name: "Cavalete Auto Alinhante de Carga", category: "Suportes para Roletes" },
  { name: "Suporte de Roletes de Transição", category: "Suportes para Roletes" },
  { name: "Canhão CAPOL 20 NR13", category: "Canhões de Ar" },
  { name: "Canhão de Ar Industrial", category: "Canhões de Ar" },
  { name: "Mesa de Vedação 2435", category: "Pontos de Transferência" },
  { name: "Vedação SRV0011560", category: "Pontos de Transferência" },
];

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const filtered = products.filter((item) => {
    const matchName = item.name.toLowerCase().includes(query);
    const matchCategory = category === "all" || item.category === category;
    return matchName && matchCategory;
  });

  productGrid.innerHTML = filtered
    .map(
      (item) => `
        <article class="card product-card">
          <h3>${item.name}</h3>
          <p>${item.category}</p>
          <small>Disponível na linha Poliway</small>
        </article>
      `
    )
    .join("");

  if (!filtered.length) {
    productGrid.innerHTML =
      '<article class="card"><h3>Nenhum produto encontrado</h3><p>Tente outro termo ou filtro de categoria.</p></article>';
  }
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
renderProducts();

const roiForm = document.querySelector("#roiForm");
const roiResult = document.querySelector("#roiResult");

roiForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const paradas = Number(document.querySelector("#paradas").value) || 0;
  const custoHora = Number(document.querySelector("#custoHora").value) || 0;
  const horas = Number(document.querySelector("#horas").value) || 0;

  const custoAnual = paradas * custoHora * horas * 12;
  const potencial = custoAnual * 0.38;

  roiResult.textContent = `Potencial de recuperação anual: ${potencial.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  })}`;
});

const checkForm = document.querySelector("#checkForm");
const checkOutput = document.querySelector("#checkOutput");

checkForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const equipamento = document.querySelector("#equipamento").value;
  const criticidade = document.querySelector("#criticidade").value;

  const base = [
    "Validar condição da correia e alinhamento.",
    "Inspecionar pontos de acúmulo e derramamento.",
    "Conferir tensão e condição de raspadores/vedações.",
  ];

  if (criticidade === "Alta") {
    base.push("Programar inspeção complementar em até 24h.");
    base.push("Registrar evidências fotográficas e plano de ação.");
  }

  checkOutput.innerHTML = `<li><strong>Equipamento:</strong> ${equipamento}</li>${base
    .map((item) => `<li>${item}</li>`)
    .join("")}`;
});

const contactForm = document.querySelector("#contactForm");
const contactFeedback = document.querySelector("#contactFeedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactFeedback.textContent =
    "Solicitação recebida. Nosso time entrará em contato em até 1 dia útil.";
  contactFeedback.style.color = "#70ffd9";
  contactForm.reset();
});

const sections = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
sections.forEach((section) => revealObserver.observe(section));

const menuBtn = document.querySelector("#menuBtn");
const mainNav = document.querySelector("#mainNav");

menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!expanded));
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
