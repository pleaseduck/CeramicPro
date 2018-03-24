$(function() {

 $(document).ready(function() {
	$("fancy-image").fancybox();

  $(".price-list__carousel").owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    margin: 5,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
 });

});
  document.addEventListener("click", function() {
    let secondActiveElement = document.querySelectorAll(".owl-item.active")[1]
    secondActiveElement.style.zIndex = "5";
    let divToScale = secondActiveElement.querySelector(".price-list__carousel__item")
    divToScale.classList.toggle("price-list__carousel__item--transformed")
  })
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-menu");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("click", function() {
    if (hamburger.classList.contains("is-active")) {
      document.querySelector(".main-menu--mobile").style.justifyContent = "space-between";
    } else {
      document.querySelector(".main-menu--mobile").style.justifyContent = "flex-end";
    };
    mainNav.classList.toggle("menu-opened");
    document.querySelector(".main-menu--mobile").classList.toggle("main-menu__mobile--static");
    hamburger.classList.toggle("is-active");
    //mainNav.style.height = window.innerHeight;
  });

  const viewMorePW = document.querySelector(".watch-more--performed-work");
  const PWItems = document.querySelectorAll(".performed-work__gallery__item");

  viewMorePW.addEventListener("click",function(evt) {
    evt.preventDefault();
    for (var i = 2; i <= PWItems.length; i++) {
      PWItems[i].classList.toggle("performed-work__gallery__item--mobile-hidden");
    }
  });

});
