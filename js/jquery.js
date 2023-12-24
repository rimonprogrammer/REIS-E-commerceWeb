$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.navbar').addClass('actived');
            $('.nav-link').css('color', 'black');
            $('.navbar-brand').css('backgroundColor', 'black');
            $('.navbar-brand').css('paddingTop', '15px');
            $('.navbar-brand').css('paddingLeft', '10px');
            $('.brandText').css('paddingRight', '10px');
            $('.btn-outline-light').css('color', 'black');
            $('.btn-outline-light').css('border', '1px solid');

        }
        else{
            $('.navbar').removeClass('actived');
            $('.nav-link').css('color', 'white');
            $('.navbar-brand').css('paddingTop', '0px');
            $('.navbar-brand').css('paddingLeft', '0px');
            $('.brandText').css('paddingRight', '0px');
            $('.navbar-brand').css('backgroundColor', 'transparent');
            $('.btn-outline-light').css('color', 'white');
            $('.btn-outline-light').css('border', '1px solid');
        }
    })
})