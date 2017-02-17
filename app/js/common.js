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

    //Animation with Waypoints

    $('.js-wp-1').waypoint(function (direction) {
         $('.js-wp-1').addClass('animated fadeInDown');
    }, {
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });

    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    $('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js-wp-5').waypoint(function (direction) {
        $('.js-wp-5').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js-wp-6').waypoint(function (direction) {
        $('.js-wp-6').addClass('animated slideInLeft');
    }, {
        offset: '60%'
    });

    $('.js-wp-7').waypoint(function (direction) {
        $('.js-wp-7').addClass('animated slideInRight');
    }, {
        offset: '60%'
    });

    $('.js-wp-8').waypoint(function (direction) {
        $('.js-wp-8').addClass('animated slideInLeft');
    }, {
        offset: '60%'
    });

    $('.js-wp-9').waypoint(function (direction) {
        $('.js-wp-9').addClass('animated flipInX');
    }, {
        offset: '50%'
    });

    $('.js-wp-10').waypoint(function (direction) {
        $('.js-wp-10').addClass('animated flipInX');
    }, {
        offset: '50%'
    });

    $('.js-wp-11').waypoint(function (direction) {
        $('.js-wp-11').addClass('animated zoomIn');
    }, {
        offset: '50%'
    });

    $('.js-wp-12').waypoint(function (direction) {
        $('.js-wp-12').addClass('animated zoomInLeft');
    }, {
        offset: '60%'
    });

    $('.js-wp-13').waypoint(function (direction) {
        $('.js-wp-13').addClass('animated zoomIn');
    }, {
        offset: '60%'
    });

    $('.js-wp-14').waypoint(function (direction) {
        $('.js-wp-14').addClass('animated zoomInRight');
    }, {
        offset: '60%'
    });

});
