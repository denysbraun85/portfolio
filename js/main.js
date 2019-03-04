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