const DEFAULTS = {
  nome: "Meu amor",
  mensagem: "Que esse carinho chegue como um abraco: simples, bonito e cheio de amor.",
  foto:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23ff8ab3'/%3E%3Cstop offset='1' stop-color='%23d91e64'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='800' fill='url(%23g)'/%3E%3Ccircle cx='400' cy='310' r='118' fill='%23fff2f7' opacity='.88'/%3E%3Cpath d='M186 690c36-154 139-236 214-236s178 82 214 236' fill='%23fff2f7' opacity='.88'/%3E%3C/svg%3E",
};

const params = new URLSearchParams(window.location.search);

const personName = document.querySelector("#personName");
const messageText = document.querySelector("#messageText");
const personPhoto = document.querySelector("#personPhoto");
const openButton = document.querySelector("#openButton");
const intro = document.querySelector("#intro");
const surprise = document.querySelector("#surprise");
const hearts = document.querySelector(".hearts");

personName.textContent = params.get("nome") || DEFAULTS.nome;
messageText.textContent = params.get("mensagem") || DEFAULTS.mensagem;
personPhoto.src = params.get("foto") || DEFAULTS.foto;

function createFloatingHeart(index) {
  const heart = document.createElement("span");
  const size = 10 + Math.random() * 24;
  const duration = 6 + Math.random() * 6;
  const delay = index * -0.55;
  const drift = -80 + Math.random() * 160;

  heart.className = "floating-heart";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.setProperty("--size", `${size}px`);
  heart.style.setProperty("--duration", `${duration}s`);
  heart.style.setProperty("--delay", `${delay}s`);
  heart.style.setProperty("--drift", `${drift}px`);
  heart.style.setProperty("--alpha", `${0.28 + Math.random() * 0.5}`);

  hearts.appendChild(heart);
}

Array.from({ length: 30 }, (_, index) => createFloatingHeart(index));

openButton.addEventListener("click", () => {
  intro.classList.add("is-hidden");
  surprise.classList.add("is-visible");
});
