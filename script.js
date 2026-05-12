const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const form = document.querySelector("[data-form]");
const formNote = document.querySelector("[data-form-note]");

const syncHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    mobileMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const phone = data.get("phone");
  const age = data.get("age");
  const subject = "Заявка на Метеор Fit";
  const body = [
    "Здравствуйте!",
    "",
    "Хочу записать ребёнка на занятие Метеор Fit.",
    `Имя родителя: ${name}`,
    `Телефон: ${phone}`,
    `Возраст ребёнка: ${age}`,
  ].join("\n");

  const url = `mailto:info@meteorfootball.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
  formNote.textContent = "Письмо подготовлено. Если почтовая программа не открылась, напишите нам в Telegram или позвоните.";
});
