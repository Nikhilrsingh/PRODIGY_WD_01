window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 500) {
    navbar.style.backgroundColor = "rgba(37, 32, 32, 0.9)";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  }
});

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});