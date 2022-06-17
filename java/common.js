$('main').load('main.html');

let idx;

$('header .top a').click(function(){
    event.preventDefault(); //페이지의 이동을 차단시켜주는 명령
    let pageUrl = $(this).attr('href'); // 각 a태그의 주소를 받아온다.
    $('main').load(pageUrl); //main 페이지를 로드한다.

    $('header .top a').eq(idx).removeClass('active');
    $(this).addClass('active');
    
    idx = $(this).index();


});