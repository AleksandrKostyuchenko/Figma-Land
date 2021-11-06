$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,  
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        easing:'ease',
        infinite:true,
        autoplay:true,
        autoplaySpeed:1600,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        centerMode:true,
        variableWidth:true,
        touchThreshold:10,
        waitForAnimate:false
  })
  });