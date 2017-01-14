$(function() {

    //fixed navbar during scrolling to bottom

    $(window).scroll(function () {

        if ($(window).scrollTop() > 820) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.bg-inverse').css("opacity", "0.8");
        }

        if ($(window).scrollTop() < 820) {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.bg-inverse').css("opacity", "");
        }
    });

    //Smooth scroll to the sections

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {

        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 40;
        $('body, html').animate({scrollTop: bl_top}, 1000);
        return false;
    });

    //Animation

    $('.js-wp-1').waypoint(function (direction) {
         $('.js-wp-1').addClass('animated fadeInDown');
    }, {
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

    $('.js-wp-3, .js-wp-4').waypoint(function (direction) {
        $('.js-wp-3, .js-wp-4').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-5').waypoint(function (direction) {
        $('.js-wp-5').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });




});
