if (localStorage.getItem("erasmusApplied") === "yes") {
  applied = true;
}
// --- Dinamička poruka na početnoj ---
document.addEventListener("DOMContentLoaded", () => {
  const welcomeBox = document.getElementById("welcome-text");
  if (welcomeBox) {
    welcomeBox.textContent = "Dobrodošli! Jeste li spremni za Erasmus avanturu? 🌍✨";
  }
});

// --- Validacija kontakt forme ---
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showAlert("Molimo popunite sva obavezna polja.", "danger");
      return;
    }

    showAlert("Poruka uspješno poslana! ✅ Hvala na javljanju.", "success");
    form.reset();
  });
}

// --- Bootstrap alert funkcija ---
function showAlert(message, type) {
  const container = document.querySelector("main");
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} mt-3`;
  alert.textContent = message;

  container.prepend(alert);

  setTimeout(() => alert.remove(), 4000);
}
const fadeEls = document.querySelectorAll("p,h1,h2,h3,ul li,ol li,.card,.hero,.quote");

function showOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", showOnScroll);
showOnScroll();

// --- Modal drzava submit ---
const modalBtn = document.getElementById("submitModal");
if (modalBtn) {
  modalBtn.addEventListener("click", () => {
    const country = document.getElementById("modal-country").value.trim();
    if (!country) {
      showAlert("Molimo unesite državu!", "danger");
      return;
    }
    showAlert(`Uspješno ste prijavili državu: ${country} ✅`, "success");
  });
}


// --- Countdown timer + prikaz uspjeha ---
const deadline = new Date("2025-03-25").getTime();
let applied = false;

function updateCountdown() {
  const now = new Date().getTime();
  const diff = deadline - now;

  if (applied) {
    document.getElementById("countdown").textContent = "✅ Uspješno ste se prijavili!";
    return;
  }

  if (diff < 0) {
    document.getElementById("countdown").textContent = "Prijave završene!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").textContent = `${days} dana`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

