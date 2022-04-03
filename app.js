const hamburger = document.querySelector(
  ".header .navbar .nav-list .hamburger"
);
const mobileMenu = document.querySelector(".header .navbar .nav-list ul");
const header = document.querySelector(".header .container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});
