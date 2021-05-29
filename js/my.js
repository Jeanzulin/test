$(document).ready(function () {

    //AOS
    $(function () {
        AOS.init();
    })

    //rellax
    var rellax = new Rellax('.rellax');

    
  //qa
  $('.qa .qa-q').click(function () {
    $(this).toggleClass("active");
    $(this).next('.qa-content').slideToggle();
})

 //slick
 $(".center1").slick({
    autoplaySpeed:1500,
    arrows: false,
    autoplay:true,
    dots: true,
    infinite: false,
    // centerMode: true,
    centerPadding: '0px',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            }
        },
    ],

});

$(".center2").slick({
    autoplaySpeed:1500,
    dots: true,
    autoplay:true,
    infinite: false,
    // centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ],

});

$("#product-data-tabs-control  li").on("click",function(){ 
    $(".center1").slick('refresh');
    $(".center2").slick('refresh');
 });
 

    //tab
    var tabControls = jQuery('#product-data-tabs-control li');
    var tabTriggers = tabControls.find('a');
    var tabs = jQuery('#product-data-tabs .product-data-tab');
    var activeClass = 'active-tab';

    jQuery('#product-data-tabs-control li:first, #product-data-tabs .product-data-tab:first').addClass(activeClass);

    tabs.each(function () {
        if (!jQuery(this).hasClass(activeClass)) {
            jQuery(this).hide();
        }
    });

    tabTriggers.each(function (input) {

        var tab = jQuery(jQuery(this).attr('href')),
            parent = jQuery(this).parent();
        jQuery(this).click(function (e) {
            e.preventDefault();
            if (!parent.hasClass(activeClass)) {
                tabControls.removeClass(activeClass);
                tabs.hide();
                parent.addClass(activeClass);
                tab.show();
            }
        });
    });


    //飄彩帶
    (function ($) {
        $.fn.snow = function (options) {
            var $flake = $('<div id="snowbox" />').css({ 'position': 'absolute', 'z-index': '2', 'top': '-50px' }).html('&#10022;'),
                documentHeight = $(document).height(),
                documentWidth = $(document).width(),
                defaults = {
                    minSize: 10,
                    maxSize: 20,
                    newOn: 1000,
                    flakeColor: "#FFD04F" /* 此處可以定義雪花顏色，若要白色可以改為#FFFFFF */
                },
                options = $.extend({}, defaults, options);
            var interval = setInterval(function () {
                var startPositionLeft = Math.random() * documentWidth - 100,
                    startOpacity = 0.5 + Math.random(),
                    sizeFlake = options.minSize + Math.random() * options.maxSize,
                    endPositionTop = documentHeight - 200,
                    endPositionLeft = startPositionLeft + Math.random() * 500,
                    durationFall = documentHeight * 10 + Math.random() * 1000;
                $flake.clone().appendTo('.wrapper').css({
                    left: startPositionLeft,
                    opacity: startOpacity,
                    'font-size': sizeFlake,
                    color: options.flakeColor,
                }).animate({
                    top: endPositionTop,
                    left: endPositionLeft,
                    opacity: 0.1
                }, durationFall, 'linear', function () {
                    $(this).remove()
                });
            }, options.newOn);
        };
    })(jQuery);
    $(function () {
        $.fn.snow({
            minSize: 5, /* 定義雪花最小尺寸 */
            maxSize: 20,/* 定義雪花最大尺寸 */
            newOn: 1200  /* 定義密集程度，數字越小越密集 */
        });
    });


    $('.goTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').stop().fadeOut();
        }

    });


    //efingo footer
    //選單滾動
    if ($(window).width() > 768) {
        var nav_height = $('header').outerHeight();
        var new_top = [0, 0];
        $(window).scroll(function () {
            new_top[1] = $(window).scrollTop();
            if (new_top[0] - new_top[1] < 0) {
                new_top[0] = new_top[1];
                // $('#wrap').css('padding-top',nav_height);
                $('header').removeClass('mystyle').addClass('mystyle'); /* 幫選單加上固定效果 */
            } else {
                new_top[0] = new_top[1];
                $('header').removeClass('mystyle'); /* 移除選單固定效果 */
                $('header').css({
                    'top': -100,
                    'position': 'fixed'
                });
            }
        })
    }
    //數位服務選單
    $('.function_ham').click(function () {
        $('.function_nav').toggleClass('function_nav_close')
    });
    if ($(window).width() > 800) {
        var function_nav = $('.function_nav');
        var nav_wrap = $('.nav_wrap');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                function_nav.addClass('function_nav_close')
                nav_wrap.addClass('nav_wrap_close')
            } else {
                function_nav.removeClass('function_nav_close')
                nav_wrap.removeClass('nav_wrap_close')
                $('header').css({
                    'top': -100,
                    'position': 'static'
                });
            }
        });
    }

    //m版漢堡選單
    $('#toggle').click(function (e) {
        $('.main-nav, nav.main-nav, #toggle, #header').toggleClass('on');
        e.preventDefault();
    });
    $('.main-nav ul.anchor li a').click(function () {
        $('#header,#toggle, .main-nav').removeClass('on')
    })

})
