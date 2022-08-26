
let data;

$.ajax({
    url: "js/list-data.json",

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
            <span class="detail">${v.detail}</span>
            </p>
            <p class="place">
            <span>${v.hashtag}</span>
            <span><img src="./img/Icon/icon_map-point.svg" alt="위치">${v.location}</span>
            </p>
            </div>`;

        $('.list > li').eq(k).prepend(elList);


        //텍스트 100자 보여주기
        txt = $('.market-list .txt .detail').eq(k).text().trim();
        $('.market-list .txt .detail').eq(k).text(strFun(txt, 100));
    });
};

// 글자 수 
function strFun(str, len) {
    let realStr = '';

    if (str.length > len) {
        realStr = str.substring(0, len) + '...';
    } else {
        realStr = str;
    }
    return realStr;
};

// 팝업 열고 닫기
$('.list > li').on('click', function () {
    
    if (event.target.className != 'closer') {
        $(this).find('.popup').addClass('active');

        let txt;
        $(this).find('.popup .travel > li').each(function (k) {
            txt = $(this).find('div > a .txt span').text().trim();
            $(this).find('div > a .txt span').text(strFun(txt, 100));
        })
    }

    $('.popup .closer').on('click', function () {
        $('.popup').removeClass('active');
    });
});


// popup > info4 > travel > slide

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.7,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on:{
        slideChange:function(e){
            // console.log(e.realIndex)
        }
    }
});

// popup > info4 > slide > 글자수


