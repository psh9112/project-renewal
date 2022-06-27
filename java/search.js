
let data;

$.ajax({
    url: "java/list-data.json",

    success: function (items) {
        data = items;

        itemList();



    } //success end

});

function itemList() {
    let elList = '';

    $.each(data.items, function (k, v) {

        elList = `<div class="market-list">
        <img src="${v.photo}" alt="${v.name}">
        <p class="txt">
        <b>${v.name}</b>
        ${v.detail}
        </p>
        <p class="place">
        <span>${v.hashtag}</span>
        <span><img src="./img/Icon/icon_map-point.svg" alt="위치">${v.location}</span>
        </p>
        </div>`;

        $('.list li').eq(k).html(elList);

    });

    console.log(data.items)
}


function init() {


    let offsetTop = $('.menu-title').offset().top;

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
        $('html').animate({ scrollTop: offsetTop }, 600);

        update();
    };


    $('figure').on('click', pageMove);

    $(window).scroll(function () {
        if(!$('figure')) pageMove();
    })



    
    function popupShow() {


    };

    function popupClose() {

    };


};

$(window).on('load', init);

























// function strFun(str, len) {
    //     let realStr = '';

    //     if (str.lenght > len) {
    //         realStr = str.substring(0, len) + '...';
    //     } else {
    //         realStr = str;
    //     }
    //     return realStr;

    // };

    // let txt = $('.txt').text().trim();
    // console.log(txt.length);
    // $('.txt').text(strFun(txt, 50));




