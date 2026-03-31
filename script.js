const formatBRL = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        reveal.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((section) => reveal.observe(section));

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const roiForm = document.querySelector("#roiForm");
const result = document.querySelector("#resultado");
roiForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const paradas = Number(document.querySelector("#paradas").value) || 0;
  const custoHora = Number(document.querySelector("#custoHora").value) || 0;
  const horas = Number(document.querySelector("#horas").value) || 0;

  const anual = paradas * custoHora * horas * 12;
  const potencial = anual * 0.38;
  result.textContent = `Potencial de recuperação anual: ${formatBRL(potencial)}`;
});

const economia = document.querySelector("#economia");
let total = 1280000;
setInterval(() => {
  total += Math.floor(Math.random() * 2100);
  economia.textContent = total.toLocaleString("pt-BR");
}, 1400);

const contactForm = document.querySelector("#contactForm");
const feedback = document.querySelector("#contactFeedback");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.textContent = "Solicitação enviada com sucesso. A equipe técnica retornará em até 24h úteis.";
  feedback.style.color = "#7bffcf";
  contactForm.reset();
});

const searchInput = document.querySelector("#productSearch");
const productCards = Array.from(document.querySelectorAll("#productGrid article"));
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  productCards.forEach((card) => {
    const text = card.dataset.name.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});
