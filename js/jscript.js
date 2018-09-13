$(document).ready(function () {
    $(window).on('scroll', function () {
        let scrollTop = $('html, body').scrollTop();
        if (scrollTop > 500) {
            $('.logo').fadeOut();
        } else {
            $('.logo').fadeIn();
        }
    });

    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    $('.menu-toggler').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-open');
    });
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]')
        .on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('menu-open');
        })
    $(window).scroll(function () {
        if ($(window).scrollTop() > '600') {
            $('header').css({"background-color": "rgba(25, 189, 154, 0.7)"});
            $('nav').css({"padding": "0"})
        } else if ($(window).scrollTop() < '600') {
            $('header').css({"background-color": "transparent"});
            $('nav').css({"padding": "2rem 0"})
        }
    })

});
