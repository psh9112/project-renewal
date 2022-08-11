
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
        $('.market-list .txt .detail').eq(k).text(strFun(txt, 50));
    });
};

function strFun(str, len) {
    let realStr = '';

    if (str.length > len) {
        realStr = str.substring(0, len) + '...';
    } else {
        realStr = str;
    }
    return realStr;
};

$('.list > li').on('click', function () {
    $(this).find('.popup').addClass('active');

    $('.popup .closer').on('click', function () {
        $('.popup').css({ 'display': 'none' });
    });
});