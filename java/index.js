
// page1

function init() {

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

        offsetTop;
        $('html').animate({ scrollTop: offsetTop }, 500);

        update();
    };

    function update() {
        $(`.page2 .visual`).addClass('active');
    };

    $('.page1 .click a').on('click', pageMove);


    $(window).on('scroll', function () {
        if (!$('.page2 .visual').hasClass('active')) pageMove();
    })
};

$(window).on('load', init);


