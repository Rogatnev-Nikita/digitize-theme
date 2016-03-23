// slideScroll
$(document).ready(function() {
    if ($(window).width() > 960) {
        $('#fullpage').fullpage({
            'scrollBar': true,
            'navigation': true,
            'afterLoad': function(anchorLink, index){}
        });
    }
});

$(document).on('click', '.scroll-to-next', function(){
    $.fn.fullpage.moveSectionDown();
});


// main menu
var menu_btn = document.querySelector(".main-header__navigation-item");
var menu_popup = document.querySelector(".main-header__menu");

menu_btn.addEventListener("click", function(event) {
    // when main menu is opened
    if (menu_popup.classList.contains("main-header__menu--opened")) {
        menu_popup.classList.remove("main-header__menu--opened");
        menu_btn.classList.remove("main-header__navigation-item--active");
    }
    // when main menu is closed
    else{
        menu_popup.classList.add("main-header__menu--opened");
        menu_btn.classList.add("main-header__navigation-item--active");
    }
});


$(document).keydown(function(e) {
    if( e.keyCode === 27 ) {
      if (menu_popup.classList.contains("main-header__menu--opened")) {
            menu_popup.classList.remove("main-header__menu--opened");
            menu_btn.classList.remove("main-header__navigation-item--active");
        }
    }
});
