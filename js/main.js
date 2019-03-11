/*================================================PRELOADER===========================================================*/
$(window).on('load', function() {
    $("#preloader").delay(600).fadeOut();
});
/*================================================preloader===========================================================*/

/*==============================================MAGNIFIC POPUP========================================================*/
$('.portfolio-card-container').magnificPopup({
    delegate: '.lightbox', // child items selector, by clicking on it popup will open
    type: 'image'
});
/*==============================================magnific popup========================================================*/

/*=============================================EMAIL VALIDATION=======================================================*/
var emailInput;

$("#email").on("change", function() {
    emailInput = $(this).val();
});

$(".btn-submit").on("click", function(e) {
    // e.preventDefault();
    if (validateEmail(emailInput)) {
    } else {
        alert('Incorrect email');
        return false;
    }
});

function validateEmail(email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return !!$.trim(email).match(pattern);
}
/*=============================================email validation=======================================================*/

/*=============================================PHONE VALIDATION=======================================================*/
function clearVal(val, limit){
    var newVal = val.replace(/[^\d]+/g, '');
    if( newVal === '' ){
        return false;
    }else{
        return newVal.substring(0, limit);
    }
}

function getResString(newVal){
    var res = '';
    for(var i = 0; i < newVal.length; i++){
        if( i === 3 ){
            res += ' ';
            res += newVal.charAt(i);
        }else if( i === 6 || i === 8 ){
            res += '-';
            res += newVal.charAt(i);
        }else{
            res += newVal.charAt(i);
        }
    }
    return res;
}

$(function(){
    $('#phone').on('input', function(){
        var val = $(this).val(),
            limit = 10;
        if( val === '' ) return;

        var newVal = clearVal(val, limit);
        if(!newVal){
            $(this).val('');
            return;
        }
        var res = getResString(newVal);
        $(this).val(res);
    });
});
/*===============================================phone validation=====================================================*/

/*===============================================BACK TO TOP BUTTON===================================================*/
$(window).on('scroll', function(){
    var wScroll = $(this).scrollTop();
    if(wScroll > 700){
        $('#back-btn').fadeIn();
    }else{
        $('#back-btn').fadeOut();
    }
});
$('#back-btn').on('click', function(){
    $('body,html').animate({
        scrollTop: 0
    }, 600);
});
/*==============================================back to top button====================================================*/

/*==================================================SCROLL SPY========================================================*/
$('body').scrollspy({
    target: '#nav',
    offset: $(window).height() / 2
});
/*==================================================scroll spy========================================================*/

/*================================================SMOOTH SCROLL=======================================================*/
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#nav").find("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
/*================================================smooth scroll=======================================================*/

/*==================================================SCROLL NAV========================================================*/
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('#nav').find('ul li a.active').removeClass('active');
            $('#nav').find('ul li a').eq(i).addClass('active');
        }
    });
}).scroll();
/*==================================================scroll nav========================================================*/

/*===================================================FIXED NAV========================================================*/
$(window).on('scroll', function() {
    var scroll = $(this).scrollTop();
    if(scroll > 1){
        $('#nav').addClass('fixed-nav');
    }else{
        $('#nav').removeClass('fixed-nav');
    }
});
/*===================================================fixed nav========================================================*/

/*=============================================NAV-COLLAPSE-BUTTON====================================================*/
$('.nav-bar-collapse').on('click', function(){
    $(this).toggleClass('nav-collapse-active');
    $('nav ul').toggleClass('open');
});
/*=============================================nav-collapse-button====================================================*/

/*==============================================COUNT CALCULATING=====================================================*/
var a = 0;
$(window).scroll(function() {

    var oTop = $('.skill').offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
            // language=JQuery-CSS
            /*======================Width animation=======================*/
            $('#number-scroll-active-1').addClass('number-scroll-active-1');
            $('#number-scroll-active-2').addClass('number-scroll-active-2');
            $('#number-scroll-active-3').addClass('number-scroll-active-3');
            $('#number-scroll-active-4').addClass('number-scroll-active-4');
            $('#number-scroll-active-5').addClass('number-scroll-active-5');
        });
        a = 1;
    }

});
/*==============================================count calculating=====================================================*/

/*==============================================WOW JS ANIMATION======================================================*/
new WOW().init();
/*==============================================wow js animation======================================================*/