// smoothScroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// mobile menu
var menu = document.querySelector(".main-header__navigation");
var menu_open = document.querySelector(".main-header__navigation--open");
var menu_close = document.querySelector(".main-header__navigation--close");
var menu_popup = document.querySelector(".main-header__menu-item-list");

menu_open.addEventListener("click", function(event) {
    if (menu_popup.classList.contains("main-header__manu-item-list--closed")) {
        menu_popup.classList.remove("main-header__manu-item-list--closed");
        menu_open.classList.remove("main-header__navigation--active");
        menu_close.classList.add("main-header__navigation--active");
    }
});

menu_close.addEventListener("click", function(event) {
    if (!menu_popup.classList.contains("main-header__manu-item-list--closed")) {
        menu_popup.classList.add("main-header__manu-item-list--closed");
        menu_close.classList.remove("main-header__navigation--active");
        menu_open.classList.add("main-header__navigation--active");
    }
});