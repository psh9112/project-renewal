

const elList = document.querySelectorAll('.list > li');
const elPopup = document.querySelectorAll('.list > li .info');

let idx = 0, i=0;
let act = [];

elList.forEach(function (el, key) {

    key.addEventListener('click', function () {

        elPopup[el].classList.add('active');

        // idx = key;
    });

});