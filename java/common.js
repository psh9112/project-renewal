$('header').load('inc.html header .top');
$('footer').load('inc.html footer .bottom');


// header

let scrollState = { y: 0, y2: 0, state: 'down' };

function scrollFun() {
    scrollState.y = $(window).scrollTop();

    if (scrollState.y > scrollState.y2) {
        scrollState.state = true;
    } else {
        scrollState.state = false;
    }

    scrollState.y2 == scrollState.y
};

function headerFun() {

    scrollFun();

    if (scrollState.state) {
        $('header').addClass('active');
    }else {
        $('header').removeClass('active');
    }

    if(scrollState.y == 0) {
        $('header').removeClass('active');
    }else{
        $('header').addClass('active');
    }

};

$(window).on('scroll', headerFun);


// top btn

$('picture').on('click', function(){
    $('html').animate({scrollTop:0}, 500);
    return false;

});

