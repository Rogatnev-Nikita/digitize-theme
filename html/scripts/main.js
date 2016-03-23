// slideScroll
$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollBar: true
    });
});

$(document).on('click', '.scroll-to-next', function(){
    $.fn.fullpage.moveSectionDown();
});


// main menu
var menu_open = document.querySelector(".main-header__navigation-item--open-btn");
var menu_close = document.querySelector(".main-header__navigation-item--close-btn");

var menu = document.querySelector(".main-header__navigation");
var menu_popup = document.querySelector(".main-header__menu");

menu_open.addEventListener("click", function(event) {
    if (menu_popup.classList.contains("main-header__menu--closed")) {
        menu_popup.classList.remove("main-header__menu--closed");

        menu_open.classList.remove("main-header__navigation-item--active");
        menu_close.classList.add("main-header__navigation-item--active");
    }
});

menu_close.addEventListener("click", function(event) {
    if (!menu_popup.classList.contains("main-header__menu--closed")) {
        menu_popup.classList.add("main-header__menu--closed");

        menu_close.classList.remove("main-header__navigation-item--active");
        menu_open.classList.add("main-header__navigation-item--active");
    }
});