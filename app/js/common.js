$(function() {

  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-menu");
  const overlay = document.querySelector(".overlay")

  hamburger.addEventListener("click", function() {
    if (hamburger.classList.contains("is-active")) {
      document.querySelector(".main-menu--mobile").style.justifyContent = "space-between";
    } else {
      document.querySelector(".main-menu--mobile").style.justifyContent = "flex-end";
    };
    mainNav.classList.toggle("menu-opened");
    hamburger.classList.toggle("is-active");
  });

});
