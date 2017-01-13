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
    })

});
