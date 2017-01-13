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



});
