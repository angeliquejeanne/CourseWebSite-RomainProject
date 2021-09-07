$(".fa-bars, .fa-times, .mobile-drawer a").click(() => {
    $(".mobile-drawer").toggleClass("active");
});

var positionElementInPage = $('.main-content').offset().top;
    $(window).scroll(
        function() {
            if ($(window).scrollTop() > positionElementInPage) {
                $('.main-content').addClass("opacity-header");
            }
            else {
                 
                $('.main-content').removeClass("opacity-header");
            }
        }
    );