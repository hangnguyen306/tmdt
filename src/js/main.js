function ui() {
    
}

// Image svg
function imgSVG(){
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
}


$(function($) {
    $toggleMenu = $('.header__toggle');
    $toggleMenu.bind('click', function(e) {
        var el = $(this);
        el.toggleClass('active');
        $('.wrapMenu').toggleClass('active');
        e.preventDefault()
    });
    $expand = $('.expand');
    $expand.click(function() {
        el = $(this);
        elUl = $(this).next();
        if (el.hasClass('active')) {
            el.removeClass('active');
            elUl.stop().slideUp(200)
        } else {
            el.addClass('active');
            elUl.stop().slideDown(200)
        }
    })
});
function sBaner(){
    var el = $('.sBannerInner');
    el.slick({
        infinite: true,
        slidesToShow: 1,
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToScroll: 1,
    });
}
function sBoxSlider(){
    var el = $('.sBoxSliderInner');
    el.slick({
        infinite: true,
        slidesToShow: 2,
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToScroll: 2,
    });
}
function sSliderRelate(){
    var el = $('.sSliderRelate');
    el.slick({
        infinite: true,
        slidesToShow: 5,
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
         
          ]
    });
}


function sSliderNewsInner(){
    var el = $('.sSliderNewsInner');
    el.slick({
        infinite: true,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        speed: 300,
        variableWidth: true
    });
}
function sSliderNewsInner2(){
    var el = $('.sSliderNewsInner2');
    el.slick({
        infinite: true,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        speed: 300,
        variableWidth: true
    });
}


function sProductDetail(){
    $('.imgSliderbig').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.imageSlidersmall'
      });
      $('.imageSlidersmall').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.imgSliderbig',
        focusOnSelect: true
      });
                  
}
function init(){
    // Base
    ui();
    imgSVG();
    news();
    sBaner();
    sBoxSlider();
    sSliderNewsInner();
    sSliderNewsInner2();
    sProductDetail();
    sSliderRelate();
    $(window).on("debouncedresize", function( event ) {
        // ...
    });
}


function news(){
    $('.gridItemSlider').slick({
        infinite: true,
        slidesToShow: 4,
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
         
          ]
    });
}
$('body').imagesLoaded( function() {
    init();
    $('body').addClass('loaded');
    $('.pageLoad').fadeOut();
})
$(window).scroll(function(){
    if ($(window).scrollTop() >=130) {
        $('.headerInner').addClass('fixed-header');
    }
    else {
        $('.headerInner').removeClass('fixed-header');
    }
});