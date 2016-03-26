$(document).ready(function() {
    // slideScroll
    if ($(window).width() > 960) {
        $('#fullpage').fullpage({
            'scrollBar': true,
            'navigation': true,
            loopHorizontal: true,
            'afterLoad': function(anchorLink, index) {}
        });
    }
    $(document).on('click', '.scroll-to-next', function() {
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
        else {
            menu_popup.classList.add("main-header__menu--opened");
            menu_btn.classList.add("main-header__navigation-item--active");
        }
    });
    // close menu with esc
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            if (menu_popup.classList.contains("main-header__menu--opened")) {
                menu_popup.classList.remove("main-header__menu--opened");
                menu_btn.classList.remove("main-header__navigation-item--active");
            }
        }
    });
    
    
    
    
    


// Pretend this is running server side
function validate( fields ) {
    var errors = {};
    if ( fields.name === "" ) {
        errors.name = "Name is required";
    }
    if ( fields.email === "" ) {
        errors.email = "Email is required";
    } else if ( !fields.email.match( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ) ) {
        errors.email = "You must provide a valid email address";
    }
    return errors;
};

function showErrors( errors ) {
    var field, span,
        errorMessages = document.querySelectorAll( "span.error" ),
        erredFields = document.querySelectorAll( "input.error" ),
        form = document.querySelector( "form" );
    
    for ( var i = 0; i < errorMessages.length; i++ ) {
        errorMessages[ i ].parentNode.removeChild( errorMessages[ i ] );
    }
    for ( i = 0; i < erredFields.length; i++ ) {
        erredFields[ i ].classList.remove( "error" );
    }
    
    for ( var error in errors ) {
        field = form.querySelector( "[name=" + error + "]" )
        field.classList.add( "error" );
        span = document.createElement( "span" );
        field.parentNode.appendChild( span );
        span.classList.add( "error" );
        span.innerHTML = errors[ error ];
    }
};

document.querySelector( "form" ).addEventListener( "submit", function() {
    event.preventDefault();
    
    // Mimic an actual server side call
    var errors = validate({ name: this.name.value, email: this.email.value });

    if ( Object.keys( errors ).length === 0 ) {
        alert( "Successful submission" );
    } else {
        showErrors( errors );
    }
});











});






// google map

function initMap() {
  var myLatLng = {lat: 33.889625, lng: -118.21539};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}