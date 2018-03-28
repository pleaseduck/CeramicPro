$(function() {

 $(document).ready(function() {
   //Инициализация плагина галереи
   $("a[data-fancybox]").fancybox({
	    loop: true,
      keyboard : true,
      arrows : false,
      infobar: false,
      captionbar: false,
      buttons : [
        'close'
    ]
});
$('[data-fancybox="group-performed-work"])'.fancybox({
   loop: true,
   keyboard : true,
   arrows : false,
   infobar: false,
   captionbar: false,
   buttons : [
     'close'
 ]
});
  console.log(document.querySelectorAll("a[data-fancybox]"));
  const galleryItem = document.querySelectorAll("a[data-fancybox]");
  for (var i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click",function() {
      document.querySelector(".fancybox-button--close").innerHTML = '<i class="fas fa-times"></i>'
    })
  }
  //setTimeout(function() {
    //document.querySelector(".fancybox-button--close").innerHTML = '<i class="fas fa-times"></i>'
    //console.log(document.querySelector(".fancybox-button--close"));
  //},1000)

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
  function loadMoreInformation(evt, elementsList) {
    evt.preventDefault();
    for (var i = 2; i <= elementsList.length; i++) {
      elementsList[i].classList.toggle("gallery__item--mobile-hidden");
    }
  }
  const viewMorePW = document.querySelector(".button--performed-work");
  const PWItems = document.querySelectorAll(".gallery__item--performed-work");


  viewMorePW.addEventListener("click",function(evt) {
    loadMoreInformation(evt, PWItems);
  });

  const viewMoreAS = document.querySelector(".button--additional-services");
  const ASItems = document.querySelectorAll(".additional-services .gallery__item");

  viewMoreAS.addEventListener("click",function(evt) {
    loadMoreInformation(evt, ASItems);
  });

  const viewMoreQA = document.querySelector(".button--questions");
  const QAItems = document.querySelectorAll(".questions .gallery__item");

  viewMoreQA.addEventListener("click",function(evt) {
    loadMoreInformation(evt, QAItems);
  });

  const viewMoreReview = document.querySelector(".button--reviews");
  const reviewItems = document.querySelectorAll(".reviews .gallery__item");

  viewMoreReview.addEventListener("click",function(evt) {
    loadMoreInformation(evt, reviewItems);
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
