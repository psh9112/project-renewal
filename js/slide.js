


$(function () {

    $(".slide").slick({
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="./img/Icon/arrow_left.png"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="./img/Icon/arrow_right.png"></button>',
        dots: false,
        slidesToShow: 3, //컨텐츠를 몇개 보여줄껀지
        slidesToScroll: 1, // 버튼을 눌렀을 때 컨텐츠가 몇개 보이는지
        autoplay: true,
        draggable: true,
        touchMove: true,
        touchThreshold: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

});

