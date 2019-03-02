/*=================PRELOADER======================*/
$(window).on('load', function() {
    $("#preloader").delay(600).fadeOut();
});
/*=================preloader======================*/

/*=================MAGNIFIC POPUP======================*/
$('.portfolio-card-container').magnificPopup({
    delegate: '.lightbox', // child items selector, by clicking on it popup will open
    type: 'image'
});
/*=================magnific popup======================*/

/*=================EMAIL VALIDATION======================*/
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
/*=================email validation======================*/