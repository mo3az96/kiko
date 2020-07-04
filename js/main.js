$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {

    new WOW().init();
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arr-cont").fadeIn(500) : $(".arr-cont").fadeOut(500);
    });


    $(".arro-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    ///////// **bestseller Slider** /////////
    var bestsellerswiper = new Swiper('.bestseller .swiper-container', {
        spaceBetween: 29,
        loop: true,
        pagination: {
            el: '.bestseller .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bestseller .swiper-button-next',
            prevEl: '.bestseller .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    ///////// **Most Slider** /////////
    var Mostswiper = new Swiper('.Most .swiper-container', {
        spaceBetween: 29,
        loop: true,
        pagination: {
            el: '.Most .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.Most .swiper-button-next',
            prevEl: '.Most .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    ///////// **New Slider** /////////
    if ($(window).width() <= 1199) {
        $(".new").removeClass("products-grid");
        $(".new").addClass("products-slider");
        $(".new .product").wrap('<div class="swiper-slide"></div>');
        $(".new .swiper-slide").wrapAll('<div class="swiper-wrapper"></div>');
        $(".new .swiper-wrapper").wrap('<div class="swiper-container"></div>');

        var newswiper = new Swiper('.new .swiper-container', {
            spaceBetween: 29,
            loop: true,
            pagination: {
                el: '.new .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.new .swiper-button-next',
                prevEl: '.new .swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    }

    ///////// **Most Slider** /////////
    var testswiper = new Swiper('.test-slider .swiper-container', {
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.test-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });
    ///////// **search popup** /////////
    if ($(window).width() <= 991) {
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(300);
            $(".search-cont").addClass("open");
            $("body").addClass("overflow");
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("open");
            $(".search-form").fadeOut(400);
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
    }
    ///////// **menu mobile** /////////
    if ($(window).width() <= 991) {
        $(".drop-li .nav-a").addClass("mo-accordion");
        $(".drop-li .sub-ul").addClass("mo-panel");
        $(".nav-xs .labels").addClass("mo-accordion");
        $(".nav-xs .drop-down").addClass("mo-panel");
    }
    $('.mo-menu-icon').click(function () {
        $("nav").fadeIn(300);
        $(".mo-navbar").addClass("nav-in");
        $("body").addClass("overflow");
    });

    $('nav').click(function () {
        $("nav").fadeOut(400);
        $(".mo-navbar").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    $('.mo-navbar').click(function (e) {
        e.stopPropagation();
    });
    $('.menu-close').click(function () {
        $("nav").fadeOut(400);
        $(".mo-navbar").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    ///////// **footer ** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **collapse** /////////
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })



});