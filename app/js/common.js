$(function() {

 $(document).ready(function() {
  repaintMenu();

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

  console.log(document.querySelectorAll("a[data-fancybox]"));
  const galleryItem = document.querySelectorAll("a[data-fancybox]");
  for (var i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click",function() {
      document.querySelector(".fancybox-button--close").innerHTML = '<i class="fas fa-times"></i>'
    })
  }

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


function repaintPrevElements(activeItem,menuItemsList) {
  var prevElement = activeItem
  for (var m = 1; m < 10; m++) {
    prevElement = prevElement.previousElementSibling
    if (prevElement !== null) {
      prevElement.classList.add("main-nav__item--sibling" + m);
    } else {
      if (menuItemsList[0].classList.contains("main-nav__item--active")) {
        menuItemsList[10].classList.add("main-nav__item--sibling10")
      }
      return
    }
  }
};

function repaintNextElements(activeItem,menuItemsList) {
  var nextElement = activeItem
    for (var j = 1; j < 10; j++) {
      nextElement = nextElement.nextElementSibling
      if (nextElement !== null) {
        nextElement.classList.add("main-nav__item--sibling" + j);
      } else {
        if (menuItemsList[10].classList.contains("main-nav__item--active")) {
          menuItemsList[0].classList.add("main-nav__item--sibling10")
        }
        return
      }
    }
};

function repaintMenu() {
  var activeItem = document.querySelector(".main-nav__item--active");
  var menuItemsList = document.querySelector(".main-nav").querySelectorAll("li");
  for (var i = 1; i <= 10; i++) {
   for (var k = 0; k <  menuItemsList.length; k++) {
     menuItemsList[k].classList.remove("main-nav__item--sibling" + i)
   }
  };
  repaintPrevElements(activeItem,menuItemsList);
  repaintNextElements(activeItem,menuItemsList);
};

if(window.matchMedia('(min-width: 1068px)').matches)
{
  var lastId,
    topMenu = $(".main-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  $(window).scroll(function(){
     var fromTop = $(this).scrollTop()+topMenuHeight;
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         menuItems
           .parent().removeClass("main-nav__item--active")
           .end().filter('[href="#'+id+'"]').parent().addClass("main-nav__item--active");
        repaintMenu();

     }

  });
}

if(window.matchMedia('(max-width: 1068px)').matches)
  {
    function repaintPrevElements(activeItem,menuItemsList) {
      var prevElement = activeItem
      for (var m = 1; m < 10; m++) {
        prevElement = prevElement.previousElementSibling
        if (prevElement !== null) {
          prevElement.classList.add("main-nav__item--sibling" + m);
        } else {
          if (menuItemsList[0].classList.contains("main-nav__item--active")) {
            menuItemsList[9].classList.add("main-nav__item--sibling10")
          }
          return
        }
      }
    };

    function repaintNextElements(activeItem,menuItemsList) {
      var nextElement = activeItem
        for (var j = 1; j < 10; j++) {
          nextElement = nextElement.nextElementSibling
          if (nextElement !== null) {
            nextElement.classList.add("main-nav__item--sibling" + j);
          } else {
            if (menuItemsList[9].classList.contains("main-nav__item--active")) {
              menuItemsList[0].classList.add("main-nav__item--sibling10")
            }
            return
          }
        }
    };
    document.querySelectorAll(".main-nav__item")[9].remove()
    var lastId,
      topMenu = $(".main-nav"),
      topMenuHeight = topMenu.outerHeight()+15,
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });
    $(window).scroll(function(){
       var fromTop = $(this).scrollTop()+topMenuHeight;
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";

       if (lastId !== id) {
           lastId = id;
           menuItems
             .parent().removeClass("main-nav__item--active")
             .end().filter('[href="#'+id+'"]').parent().addClass("main-nav__item--active");
          repaintMenu();

       }

    });
    /*$(document).ready(function(){
        console.log(document.querySelectorAll(".main-nav li"));
  	    $(".main-nav").on("click","a", function (event) {
  	        event.preventDefault();
            console.log($(id).offset());
  	        var id  = $(this).attr('href'),
  	            top = $(id).offset().top;
  	        $('body,html').animate({scrollTop: top}, 1500);

  	    });

  });*/
  };
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
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    if (target.tagName === "A") {
      for (var i = 0; i < mainMenuItems.length; i++) {
        mainMenuItems[i].classList.remove("main-nav__item--active");
      }
      target.parentNode.classList.add("main-nav__item--active");
      repaintMenu();
      console.log(target.parentNode.parentNode);
    }
  });

});
/*$([data-fancybox="group-performed-work"]).fancybox({
   loop: true,
   keyboard : true,
   arrows : false,
   infobar: false,
   captionbar: false,
   buttons : [
     'close'
 ]
});*/
//setTimeout(function() {
    //document.querySelector(".fancybox-button--close").innerHTML = '<i class="fas fa-times"></i>'
    //console.log(document.querySelector(".fancybox-button--close"));
  //},1000)
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
  /*var lastId,
    topMenu = $(".main-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  $(window).scroll(function() {
    var fromTop = $(this).scrollTop()+topMenuHeight;
    var cur = scrollItems;
    console.log(cur);
    cur = cur[cur.length-1];
    console.log(cur);
    var id = cur //&& cur.length ? cur[0].id : "";
    console.log();

    if (lastId !== id) {
        lastId = id;
        menuItems
          .parent().removeClass("main-nav__item--active")
          .end().filter('[href="#'+id+'"]').parent().addClass("main-nav__item--active");
       repaintMenu();

    }
  })*/
