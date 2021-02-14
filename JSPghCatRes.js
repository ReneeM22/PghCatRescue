$(function(){
    $(".carousel").carousel({interval: 1000});
    $("#carouselButtonPlay").click(function(){
        $(".carousel").carousel.("play");
    });
    
    $("#carouselButtonPause").click(function(){
        $(".carousel").carousel.("pause");
    });

});