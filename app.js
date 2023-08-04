

    //  setInterval(function(){
    //      $('.slide').animate({left:-400}, function(){
    //          $('.slide img:first').appendTo($('.slide'))
    //          $('.slide').css('top',0)
    //      })
    //  },3000)

    $('.slide').slick({
        dots:false,
        nextArrow:$('.right'),
        prevArrow:$('.left'),
        autoplay:true,
        autoplaySpeed: 5000,
    });


