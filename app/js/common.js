$(function() {
//Инициализация плагина галереи
 $(document).ready(function() {
	$(".fancy-image").fancybox();

// Инициализация плагина карусели
  $(".price-list__carousel").owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    margin: 12,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    center: true
 });
// Трансформация активного элемента в карусели тарифов
 function resetTransformation() {
   const allActiveELements = document.querySelectorAll(".owl-item");

   for (var i = 0; i < allActiveELements.length; i++) {
      allActiveELements[i].style.zIndex = "1"
    let currentDiv = allActiveELements[i].childNodes;
    currentDiv[0].classList.remove("price-list__carousel__item--transformed");
   }
 };
 function transformElement() {
   let secondActiveElement = document.querySelectorAll(".owl-item.active")[1]
   secondActiveElement.style.zIndex = "5";
   let divToScale = secondActiveElement.querySelector(".price-list__carousel__item")
   divToScale.classList.toggle("price-list__carousel__item--transformed")
 };
 function transformActive() {
   resetTransformation();
    transformElement();
 };



(function() {
  transformActive();
 })();



 document.querySelector(".price-list__carousel .owl-nav").addEventListener("click",function() {
  transformActive();
 });



  document.querySelector(".price-list__carousel").addEventListener("mousemove",function() {
   transformActive();
  })
});

// Реализация мобильного меню
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
  });

// Реализация подгрузки информации для различных блоков
  const viewMorePW = document.querySelector(".button--performed-work");
  const PWItems = document.querySelectorAll(".performed-work .gallery__item");

  viewMorePW.addEventListener("click",function(evt) {
    evt.preventDefault();
    for (var i = 2; i <= PWItems.length; i++) {
      PWItems[i].classList.toggle("gallery__item--mobile-hidden");
    }
  });

  const viewMoreAS = document.querySelector(".button--watch-more--additional-services");
  const ASItems = document.querySelectorAll(".additional-services__gallery__item");

  viewMoreAS.addEventListener("click",function(evt) {
    evt.preventDefault();
    for (var i = 2; i <= PWItems.length; i++) {
      ASItems[i].classList.toggle("additional-services__gallery__item--mobile-hidden");
    }
  });

});
