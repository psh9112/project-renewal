
// page1



let idx = 0, play;
let scrHeight = { a: 0, a2: 0, state: 'down' };
let offsetTop = $('.page2').offset().top;

function eventContent() {

    scrHeight.a = $(window).scrollTop();

    if (scrHeight.a > scrHeight.a2) {
        scrHeight.state = true;
    } else {
        scrHeight.state = false;
    }

    scrHeight.a2 == scrHeight.a;

};


// function scrollEvent() {

//     eventContent();

//     clearTimeout(play);

//     play = setTimeout(function () {

//         scrHeight.state ? idx++ : idx-- ;

//         $('.page1').css({
//             transform: `translateY(+${offsetTop}px)`
//         })

//     }, 50);

//     update();
// };


function pageMove() {

    eventContent();

    event.preventDefault();

    offsetTop;
    $('html').animate({ scrollTop: offsetTop }, 500);

    update();
};

function update() {
    $('.page2').removeClass('active');
    $(`.page2`).addClass('active');
};

$('.page1 .click a').on('click', pageMove);
// $('.page1').on('scroll', scrollEvent);