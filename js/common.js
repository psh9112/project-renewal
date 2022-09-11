

$('header').load('inc.html header .top');
$('footer').load('inc.html footer .bottom');
$('nav').load('inc.html nav .navigator', navFn);


// header

let scrollState = { y: 0, y2: 0, state: 'down' };

function scrollFun() {
    scrollState.y = $(window).scrollTop();

    if (scrollState.y > scrollState.y2) {
        scrollState.state = true;
    } else {
        scrollState.state = false;
    }

    scrollState.y2 = scrollState.y
};

function headerFun() {

    scrollFun();

    if (scrollState.state) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }

    if (scrollState.y == 0) {
        $('header').removeClass('change');
    } else {
        $('header').addClass('change');
    }

};

$(window).on('scroll', headerFun);



function navFn() {
    // navigation
    const elHead = document.querySelector('header');
    const elTrigger = document.querySelector('header .bar');
    const elNavi = document.querySelector('nav');
    const elClose = document.querySelector('nav .close');

    // trigger btn
    elTrigger.addEventListener('click', function () {

        elTrigger.classList.toggle('active');

        setTimeout(function () {
            if (elTrigger.classList.contains('active')) {
                elHead.classList.add('nav-active');
                elNavi.classList.add('open');
            }
        }, 10)
    });
    
    // close btn
    elClose.addEventListener('click', function () {

        elNavi.classList.remove('open');
        elHead.classList.remove('nav-active');
    });
};
