$(document).ready(function() {
    $(".carousel-section").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                margin: 20,
            },

            768: {
                items: 3,
                nav: true
            },
            992: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    })
    $(".owl-next").html('&#10230;');
    $(".owl-prev").html('&#10229;');

    $("#partner-logo").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 20,
            },
            576: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 5,
                nav: true,
            }
        }
    })
    $(".owl-next").html('&#10230;');
    $(".owl-prev").html('&#10229;');

    $("#owl-about").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        margin: 10,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        navText: ["&#10229;", "&#10230;"],
        navClass: ['about-prev', 'about-next'],
    })

});