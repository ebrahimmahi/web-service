$(document).ready(function(){
 
    // navbar 
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 50){
            $('.header').css({'background':'rgb(126,87,194)','box-shadow':'0 .2rem .5rem rgba(0,0,0,0.4)'});
        }else{
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    // faq area 

    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });

});