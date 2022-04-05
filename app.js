const hamburger = document.querySelector(
  ".header .navbar .nav-list .hamburger"
);
const mobileMenu = document.querySelector(".header .navbar .nav-list ul");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".navlink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  })
);

document.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 150) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
