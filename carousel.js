$('#openNav').on('click', function() {
    $('#myNav').css("height", "100%");
});

$('#closeNav').on('click', function() {
    $('#myNav').css("height", "0%");
});

$('#btn1').on('click', function(e) {
    $('.progress-bar').attr('style', "width: 0%");
});
$('#btn2').on('click', function(e) {
    $('.progress-bar').attr('style', "width: 100%");
});


$(document).ready(function() {
    $('.carousel-section').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        responsive: {
            1: {
                items: 1,
                nav: true,
                loop: true
            },
            400: {
                items: 2,
                nav: true,
                loop: true
            },
            576: {
                items: 2,
                margin: 20,
                nav: true,
                loop: true
            },
            768: {
                items: 3,
                margin: 20,
                nav: true,
                loop: true
            },
            992: {
                items: 4,
                nav: true,
                margin: 20,
                loop: true
            }
        }
    })
    $(".owl-next").html('&#10230;');
    $(".owl-prev").html('&#10229;');

    $('.carousel-section2').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        nav: true,
        navText: ["&#10229;", "&#10230;"],
        navClass: ['caros-prev', 'caros-next'],
        responsive: {
            1: {
                items: 1,
                nav: true,
                loop: true
            },
            400: {
                items: 2,
                nav: true,
                loop: true
            },
            576: {
                items: 2,
                margin: 20,
                nav: true,
                loop: true
            },
            768: {
                items: 3,
                margin: 20,
                nav: true,
                loop: true
            },
            992: {
                items: 4,
                nav: true,
                margin: 20,
                loop: true
            }
        }
    })

    $("#partner-logo").owlCarousel({
        margin: 20,
        loop: true,
        dots: false,
        nav: false,
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
                nav: false,
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