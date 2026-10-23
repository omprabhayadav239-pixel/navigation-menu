const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.classList.toggle("open", open);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    menu.classList.remove("open");
    menu.querySelector(".active")?.classList.remove("active");
    link.classList.add("active");
  });
});
