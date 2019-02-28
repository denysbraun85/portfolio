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

// $(document).ready(function(){
//     var emailInput = $('#email').val();
//     if(emailInput !== " ") {
//         $(this).prop('valid', true);
//         console.log(emailInput)
//     }
// });
