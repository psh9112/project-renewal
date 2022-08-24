
// page1

function init() {

    // ================================== loding ==================================
    $('main,header,footer').css('opacity', '0');
    setTimeout(function () {
        $('.loding-motion').fadeOut();
        $('main,header,footer').css('opacity', '1');
    }, 2500)


    // window.addEventListener('load',function(){
    //     $('.loding-motion').fadeOut();
    // })

    // ================================== loding end ==================================


    // top btn

    $('picture .top-btn').on('click', function () {
        $('html').animate({ scrollTop: 0 }, 500);
        return false;

    });


    let offsetTop = $('.page2').offset().top;

    function eventContent() {
        let scrHeight = { a: 0, a2: 0, state: 'down' };

        scrHeight.a = $(window).scrollTop();

        if (scrHeight.a > scrHeight.a2) {
            scrHeight.state = true;
        } else {
            scrHeight.state = false;
        }

        scrHeight.a2 == scrHeight.a;
    };


    function pageMove() {

        eventContent();

        event.preventDefault();

        // offsetTop;
        $('html').animate({ scrollTop: offsetTop }, 500);

        update();
    };

    function update() {
        $(`.page2 .visual`).addClass('active');
    };

    $('.page1 .cns a').on('click', pageMove);

    setTimeout(function(){
            $(window).on('scroll', function () {
                if (!$('.page2 .visual').hasClass('active')) pageMove();
            })

    },500)
};

$(window).on('load', init);


