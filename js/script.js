const menuToggle = document.querySelector("header nav .menu-toggle");
const navbar = document.querySelector("header nav ul");
const btnDownload = document.querySelector("header nav .btn-download");
let toggle = true;

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("nav-appear");
  btnDownload.classList.toggle("btn-download-appear");
  if (toggle) {
    menuToggle.name = "close";
    toggle = false;
  } else {
    menuToggle.name = "menu";
    toggle = true;
  }
});

const planCardBtn = document.querySelectorAll("main #plans .card .btn");
for (let i = 0; i < planCardBtn.length; i++) {
  if (i == 0 || i == 2) {
    planCardBtn[i].style.background = "#8d94e1";
    planCardBtn[i].style.border = "1px solid #8d94e1";
    planCardBtn[i].addEventListener("mouseenter", () => (planCardBtn[i].style.background = "transparent"));
    planCardBtn[i].addEventListener("mouseleave", () => (planCardBtn[i].style.background = "#8d94e1"));
  }
}
