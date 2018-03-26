$(function() {
//Инициализация плагина галереи
 $(document).ready(function() {
	$(".fancy-image").fancybox();

// Инициализация плагина карусели
  $(".price-list__carousel").owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    center: true
 });

 $(".promotions__carousel").owlCarousel({
   items: 1,
   nav: true,
   navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
   center: true,
   margin: 200,
   dots: true,
   dotsEach: true
});
// Трансформация активного элемента в карусели тарифов
 function resetTransformation() {
   const allActiveELements = document.querySelectorAll(".owl-item");

   for (var i = 0; i < allActiveELements.length; i++) {
      allActiveELements[i].style.zIndex = "1"
    let currentDiv = allActiveELements[i].childNodes;
    currentDiv[0].classList.remove("carousel__item--transformed");
   }
 };
 function transformElement() {
   let secondActiveElement = document.querySelectorAll(".owl-item.active")[1]
   secondActiveElement.style.zIndex = "5";
   let divToScale = secondActiveElement.querySelector(".price-list .carousel__item")
   divToScale.classList.toggle("carousel__item--transformed")
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
  const mainNav = document.querySelector(".menu-bar");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("click", function() {
    if (hamburger.classList.contains("is-active")) {
      document.querySelector(".menu-bar--mobile").style.justifyContent = "space-between";
    } else {
      document.querySelector(".menu-bar--mobile").style.justifyContent = "flex-end";
    };
    mainNav.classList.toggle("menu-opened");
    document.querySelector(".menu-bar--mobile").classList.toggle("menu-bar__mobile--static");
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

  const viewMoreAS = document.querySelector(".button--additional-services");
  const ASItems = document.querySelectorAll(".additional-services .gallery__item");

  viewMoreAS.addEventListener("click",function(evt) {
    evt.preventDefault();
    for (var i = 2; i <= ASItems.length; i++) {
      ASItems[i].classList.toggle("gallery__item--mobile-hidden");
    }
  });

  const viewMoreQA = document.querySelector(".button--questions");
  const QAItems = document.querySelectorAll(".questions .gallery__item");

  viewMoreQA.addEventListener("click",function(evt) {
    evt.preventDefault();
    for (var i = 3; i <= QAItems.length; i++) {
      QAItems[i].classList.toggle("gallery__item--mobile-hidden");
    }
  });

  const viewMoreReview = document.querySelector(".button--reviews");
  const reviewItems = document.querySelectorAll(".reviews .gallery__item");

  viewMoreReview.addEventListener("click",function(evt) {
    evt.preventDefault();
    for (var i = 3; i <= reviewItems.length; i++) {
      reviewItems[i].classList.toggle("gallery__item--mobile-hidden");
    }
  });
});
