var navbarHeight = $('nav').outerHeight();
$('.main-body').css('margin-top',navbarHeight);


$('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});



  var highestBox = 1000;
        $('.gallery-item').each(function(){  
                if($(this).height() < highestBox){  
                highestBox = $(this).height();  
        }
    });    
    $('.gallery-item').height(highestBox);


