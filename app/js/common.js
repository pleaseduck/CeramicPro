$(function() {

 $(document).ready(function() {
  repaintMenu();
  //document.querySelector(".sidebar .contacts__button").click()
  //document.querySelectorAll("a")

  var allLinksInDocument = document.querySelectorAll("a")
  for (var i = 0; i < allLinksInDocument; i++) {
  allLinksInDocument[i].addEventListener("click", function (evt) {
      evt.preventDefault()
    })
  }
  if(window.matchMedia('(min-width: 1068px)').matches)
  {
      $('#fullpage').fullpage({
        menu: '#main-nav',
        anchors: ['section--main-header', 'section--performed-work', 'section--price-list', 'section--additional-services', 'section--promotions','section--questions','section--reviews','section--certificates','section--about-company','section--social-networks', 'section--contacts'],
        css3: true,
		    scrollingSpeed: 1500,
        onLeave: function(index, nextIndex, direction){
          var activeItem = document.querySelector(".main-nav__item.active");
          var menuItemsList = document.querySelector(".main-nav").querySelectorAll("li");
          for (var i = 1; i <= 10; i++) {
           for (var k = 0; k <  menuItemsList.length; k++) {
             menuItemsList[k].classList.remove("main-nav__item--sibling" + i)
             menuItemsList[k].classList.remove("active")
             menuItemsList[k].classList.remove("main-nav__item--active")
           }
          };
          if (direction === "down") {
            var nextElement = activeItem.nextElementSibling
            nextElement.classList.add("active");
            repaintNextElements(nextElement, menuItemsList)
            var prevElement = activeItem.nextElementSibling
            repaintPrevElements(prevElement, menuItemsList)
          } else if (direction === "up"){
            var nextElement = activeItem.previousElementSibling
            nextElement.classList.add("active");
            repaintNextElements(nextElement, menuItemsList)
            var prevElement = activeItem.previousElementSibling
            repaintPrevElements(prevElement, menuItemsList)
          }
        }
})
var linksToNextSlide = document.querySelectorAll(".bottom-line")
for (var i = 0; i < linksToNextSlide.length; i++) {
  linksToNextSlide[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    var target = evt.target;
    if (target.tagName === "SPAN") {
      var href = target.parentNode.getAttribute("data-href").replace(/1/g, '');
      var currentLink = "a[href='" + [href] + "']"
      var LinkTonextBLock = href.replace(/#/g, '')
    } else if (target.tagName === "A") {
      var href = target.getAttribute("data-href").replace(/1/g, '');
      var currentLink = "a[href='" + [href] + "']"
      var LinkTonextBLock = href.replace(/#/g, '')
    } else if (target.tagName === "I") {
      var href = target.parentNode.parentNode.getAttribute("data-href").replace(/1/g, '');
      var currentLink = "a[href='" + [href] + "']"
      var LinkTonextBLock = href.replace(/#/g, '')
    }
        $.fn.fullpage.moveTo(LinkTonextBLock + "", 0)

  });
}
var linksToPrevSlide =  document.querySelectorAll(".link--to-prev-block")
}
for (var i = 0; i < linksToPrevSlide.length; i++) {
  linksToPrevSlide[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    var target = evt.target;
    if (target.tagName === "SPAN") {
      var href = target.parentNode.getAttribute("data-href").replace(/1/g, '');
      var currentLink = "a[href='" + [href] + "']"
      var LinkToPrevBLock = href.replace(/#/g, '')
    } else if (target.tagName === "A") {
      var href = target.getAttribute("data-href").replace(/1/g, '');
      var currentLink = "a[href='" + [href] + "']"
      var LinkToPrevBLock = href.replace(/#/g, '')
    } else if (target.tagName === "I") {
      var href = target.parentNode.parentNode.getAttribute("data-href").replace(/1/g, '');
      var currentLink = "a[href='" + [href] + "']"
      var LinkToPrevBLock = href.replace(/#/g, '')
    }
        $.fn.fullpage.moveTo(LinkToPrevBLock + "", 0)

  });
}
      var menuItemsList = document.querySelectorAll(".main-nav__item");
      for (var i = 0; i < menuItemsList.length; i++) {
        menuItemsList[i].addEventListener("click", function() {
          for (var j = 0; j < menuItemsList.length; j++) {
            menuItemsList[j].classList.remove("main-nav__item--active");
          };
            setTimeout(function() {
              var activeItem = document.querySelector(".active");
              var menuItemsList = document.querySelector(".main-nav").querySelectorAll("li");
              for (var i = 1; i <= 10; i++) {
               for (var k = 0; k <  menuItemsList.length; k++) {
                 menuItemsList[k].classList.remove("main-nav__item--sibling" + i)
               }
              };
              repaintPrevElements(activeItem,menuItemsList);
              repaintNextElements(activeItem,menuItemsList);
            },50)

        });
      };

  });

  $(".scroll-wrapper").niceScroll(".gallery",{
    cursorborder: "none",
    cursorwidth: "10px",
    autohidemode: false,
    enablemousewheel: true
  });
  $(".scrollable-content").niceScroll({
    cursorborder: "none",
    cursorwidth: "10px",
    autohidemode: false,
    enablemousewheel: true
  });
  /*$("body").niceScroll({
    cursorborder: "none",
    cursorwidth: "10px",
    horizrailenabled: false
  });*/
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

  function replaceCloseButton(evt) {
    target = evt.target;
    src = target.getAttribute("data-src")
    if (target.classList.contains("screenshot-review__content")) {
      src = target.parentNode.getAttribute("data-src")
    }
    let closeIcon = document.querySelector(".fancybox-close-small").cloneNode(true);
    document.querySelector(".fancybox-close-small").remove()
    closeIcon.innerHTML = '<i class="fas fa-times"></i>'
    document.querySelector(`${src}`).parentElement.appendChild(closeIcon);
  }
  function addOpenModalListeners(buttons) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(evt) {
        evt.preventDefault()
          replaceCloseButton(evt)
      });
    }
  };
  modalFormOpeners = document.querySelectorAll("[data-src='#modal--form']");
  addOpenModalListeners(modalFormOpeners);
  modalQuestionsOpeners = document.querySelectorAll("[data-src='#modal--question']");
  addOpenModalListeners(modalQuestionsOpeners);
  modalReviewOpeners = document.querySelectorAll("[data-src='#modal--review']");
  addOpenModalListeners(modalReviewOpeners);
  modalVideoReviewOpeners = document.querySelectorAll("[data-src='#modal--video-review']")
  addOpenModalListeners(modalVideoReviewOpeners)
  modalImageReviewOpeners = document.querySelectorAll(".screenshot-review img")


  const galleryItem = document.querySelectorAll("[data-fancybox]");
  for (var i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click",function() {
      document.querySelector(".fancybox-button--close").innerHTML = '<i class="fas fa-times"></i>'
    })
  }


  var questionLinks = document.querySelector(".questions").querySelectorAll("a.link--more-information")
  function addQuestionsEvents(links) {
      for(var i=0; i<links.length; i++) {
        //links[i].preventDefault()
          links[i].onclick = function(x) {
            //evt.preventDefault()
              return function() {
                  var nextButton = document.querySelector(".modal--question .button--modal-next")
                  var nextLink = questionLinks[x + 1]
                 function onNextButtonClick() {
                   var nextLinkk = nextLink
                   $.fancybox.close( true );
                   nextButton.removeEventListener("click", onNextButtonClick)
                   prevButton.removeEventListener("click", onPrevButtonClick)
                   setTimeout(function() {
                   nextLinkk.click()
                   },200)
                 }
                 var prevButton = document.querySelector(".modal--question .button--modal-prev")
                 var prevLink = questionLinks[x - 1]
                 function onPrevButtonClick() {
                   prevLinkk = prevLink
                   $.fancybox.close( true );
                   prevButton.removeEventListener("click", onPrevButtonClick)
                   nextButton.removeEventListener("click", onNextButtonClick)
                   setTimeout(function() {
                   prevLinkk.click()
                   },200)
                 }
                 prevButton.addEventListener("click", onPrevButtonClick)
                 nextButton.addEventListener("click",onNextButtonClick)
               }
          }(i)
      }
  }
addQuestionsEvents(questionLinks)
var performedWorkLinks = document.querySelector(".performed-work").querySelectorAll("a.button")
function addPerformedWorkEvents(links) { // Работают по отдельности
    for(var i=0; i<links.length; i++) {
        links[i].onclick = function(x) {
            return function() {
                var nextButton = document.querySelector(".modal--performed-work .button--modal-next")
                var nextLink = links[x + 1]
               function onNextButtonClick() {
                 var nextLinkk = nextLink
                 $.fancybox.close( true );
                 nextButton.removeEventListener("click", onNextButtonClick)
                 prevButton.removeEventListener("click", onPrevButtonClick)
                 setTimeout(function() {
                 nextLinkk.click()
                 },200)
               }
               var prevButton = document.querySelector(".modal--performed-work .button--modal-prev")
               var prevLink = links[x - 1]
               function onPrevButtonClick() {
                 prevLinkk = prevLink
                 $.fancybox.close( true );
                 prevButton.removeEventListener("click", onPrevButtonClick)
                 nextButton.removeEventListener("click", onNextButtonClick)
                 setTimeout(function() {
                 prevLinkk.click()
                 },200)
               }
               prevButton.addEventListener("click", onPrevButtonClick)
               nextButton.addEventListener("click",onNextButtonClick)
             }
        }(i)
    }
}
addPerformedWorkEvents(performedWorkLinks)
//addEvents(performedWorkLinks)
var reviewLinks = document.querySelector(".reviews").querySelectorAll("a.link--modal")
function addReviewLinksEvents(links) { // Работают по отдельности
    for(var i=0; i<links.length; i++) {
        links[i].onclick = function(x) {
            return function() {
                if (links[x].getAttribute("data-src") == "#modal--review") {
                  var nextButton = document.querySelector(".modal--review .button--modal-next")
                  var prevButton = document.querySelector(".modal--review .button--modal-prev")
                }
                if (links[x].getAttribute("data-src") == "#modal--video-review") {
                  var nextButton = document.querySelector(".modal--video-review .button--modal-next")
                  var prevButton = document.querySelector(".modal--video-review .button--modal-prev")
                }
                if (links[x].getAttribute("data-src") == "#modal--image-review") {
                  var nextButton = document.querySelector(".modal--image-review .button--modal-next")
                   var prevButton = document.querySelector(".modal--image-review .button--modal-prev")
                }
                var nextLink = links[x + 1]
               function onNextButtonClick() {
                 var nextLinkk = nextLink
                 $.fancybox.close( true );
                 nextButton.removeEventListener("click", onNextButtonClick)
                 prevButton.removeEventListener("click", onPrevButtonClick)
                 setTimeout(function() {
                 nextLinkk.click()
                 },200)
               }
               var prevLink = links[x - 1]
               function onPrevButtonClick() {
                 prevLinkk = prevLink
                 $.fancybox.close( true );
                 prevButton.removeEventListener("click", onPrevButtonClick)
                 nextButton.removeEventListener("click", onNextButtonClick)
                 setTimeout(function() {
                 prevLinkk.click()
                 },200)
               }
               prevButton.addEventListener("click", onPrevButtonClick)
               nextButton.addEventListener("click",onNextButtonClick)
             }
        }(i)
    }
}
addReviewLinksEvents(reviewLinks)

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
   loop: true,
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
      if (menuItemsList[0].classList.contains("main-nav__item--active") || menuItemsList[0].classList.contains("active")) {
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
        if (menuItemsList[10].classList.contains("main-nav__item--active") || menuItemsList[10].classList.contains("active")) {
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
    document.querySelectorAll(".main-nav__item")[9].remove();


      jQuery(window).scroll(function(){
             var $sections = $('.section');
      $sections.each(function(i,el){
            var top  = $(el).offset().top-100;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id').replace(/1/g, '');
          if( scroll > top && scroll < bottom){
                $('li.main-nav__item--active').removeClass('main-nav__item--active');
                $('a[href="#'+id+'"]').parent().addClass('main-nav__item--active');
                repaintMenu()
            }
        })
      });

  const mainMenu = document.querySelector(".main-nav");
  const mainMenuItems = document.querySelectorAll(".main-nav__item");

  mainMenu.addEventListener("click", function(event) {
    var target = event.target;
    var id  = target.getAttribute("href") + "1";
    var top = $(id).offset().top - 100;
    $('body,html').animate({scrollTop: top}, 1500);
    if (target.tagName === "A") {
      for (var i = 0; i < mainMenuItems.length; i++) {
        mainMenuItems[i].classList.remove("main-nav__item--active");
      }
      target.parentNode.classList.add("main-nav__item--active");
      repaintMenu();
    }
  });
  };

  /*$(".main-nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);

  });*/
  var bottomLineLinks = document.querySelectorAll(".bottom-line");
  for (var i = 0; i < bottomLineLinks.length; i++) {
    bottomLineLinks[i].addEventListener("click", function(event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    })
  };
  var topLineLinks = document.querySelectorAll(".link--to-prev-block");
  for (var i = 0; i < topLineLinks.length; i++) {
    topLineLinks[i].addEventListener("click", function(event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    })
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
  const PWItems = document.querySelectorAll(".performed-work  .gallery__item");


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
