$(function() {
//Инициализация плагина галереи
 $(document).ready(function() {
	

// Инициализация плагина карусели
  $(".price-list__carousel").owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    margin: 0,
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
DG.then(function() {
  DG.map('map', {
  center: [52.29,104.28],
  zoom: 13
  });
});
// Трансформация активного элемента в карусели тарифов

/* const test = document.createElement("iframe");
 test.style.width = "100%";
 test.style.height = "100%";
 test.style.position = "absolute";
 test.style.zIndex = "-1";
 test.innerHTML = "";


 const activeCarouselElement = document.querySelector(".owl-item.center")
 const activeCarouselItem = activeCarouselElement.querySelector(".carousel__item")
 activeCarouselElement.appendChild(test)
 console.log(activeCarouselItem);
 console.log(test);
*/
//frame.onresize = function(){
  //alert('Размеры div #Test изменены.');
//}
});

// Реализация мобильного меню
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("click", function() {
    document.querySelector(".sidebar--mobile").classList.toggle("sidebar--inactive");
    mainNav.classList.toggle("menu-opened");
    document.querySelector(".sidebar--mobile").classList.toggle("sidebar__mobile--static");
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

  $(document).ready(function(){
	    $(".main-nav").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 1500);
	    });
	});

  const mainMenu = document.querySelector(".main-nav");
  const mainMenuItems = document.querySelectorAll(".main-nav__item");

  mainMenu.addEventListener("click", function(event) {
    var target = event.target;
    if (target.tagName === "A") {
      for (var i = 0; i < mainMenuItems.length; i++) {
        mainMenuItems[i].classList.remove("main-nav__item--active");
      }
      target.parentNode.classList.add("main-nav__item--active");
      console.log(target.parentNode.parentNode);
    }
  });

});
