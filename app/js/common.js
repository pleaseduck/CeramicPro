$(function() {

 $(document).ready(function() {
	$("fancy-image").fancybox();
});

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
  console.log(PWItems);
  viewMorePW.addEventListener("click",function(evt) {
    evt.preventDefault();
    for (var i = 2; i <= PWItems.length; i++) {
      PWItems[i].classList.toggle("performed-work__gallery__item--mobile-hidden");
    }
  })

});
