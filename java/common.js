/* $('main').load('main.html');

let idx=0;

$('header .top a').click(function(){

    event.preventDefault(); //페이지의 이동을 차단시켜주는 명령
    let pageUrl = $(this).attr('href'); // 각 a태그의 주소를 받아온다.
    $('main').load(pageUrl); //main 페이지를 로드한다.
    
    console.log(pageUrl)
    $('header .top a').eq(idx).removeClass('active');
    $(this).addClass('active');
    
    idx = $(this).index();


});
*/



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

    scrollState.y == scrollState.y2
};

function headerFun() {

    scrollFun();

    if (scrollState.state) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }

};

$(window).on('scroll', headerFun);


// top btn

$('picture').on('click', function(){

    $('html').offset().top;

});

