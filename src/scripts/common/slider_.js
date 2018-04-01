/*

1. Подумать!!!!

Perform Подготовка
Plan Планирование
Process Реализация
Perfect Улучшение

1. Постановка проблемы. Что? Зачем? Кому это нужно?
Пользователю не хочется идти на отдельную страницу с портфолио и скролить
до бесконечности 10 тысяч работ.
Написать слайдер с главными работами. Желательно сделать его удобным и красивым. Слайдер должен быть
 * универсальным и легко интегруемым
 * дополняемым
 * настраеваемым
 * респонсив

2. Как это сделать?

   * Есть набор объектов(работ)
   * Формируем каркас слайдера, наполняем его n объектами
   * При нажатии на конпки смены слайдов -- меняем слайды и текст описания.

    -> (click right)
    1         4       3
   / \   ->  / \  -> / \
  4   2     3   1   2   4

    <- (click left)
    1         2       3
   / \   ->  / \  -> / \
  4   2     1   3   2   4

  Кнопка смены слайдов.
  2->1 (Анимация)


 */


var data1 = [{
    title: "Сайт 1",
    image: "site-1.jpg",
    description: "Описание процеса работы 1",
    tags: ["js", "html"]
},
{
    title: "Сайт 2",
    image: "site-2.jpg",
    description: "Описание процеса работы 2",
    tags: ["js", "html"]
},
{
    title: "Сайт 3",
    image: "site-3.jpg",
    description: "Описание процеса работы 3",
    tags: ["js", "html"]
},
{
    title: "Сайт 4",
    image: "site-4.jpg",
    description: "Описание процеса работы 4",
    tags: ["js", "html"]
}
];


var data2 = [{
    title: "Сайт 12",
    image: "site-1.jpg",
    description: "Описание процеса работы 1",
    tags: ["js", "html"]
},
{
    title: "Сайт 22",
    image: "site-2.jpg",
    description: "Описание процеса работы 2",
    tags: ["js", "html"]
},
{
    title: "Сайт 33",
    image: "site-3.jpg",
    description: "Описание процеса работы 3",
    tags: ["js", "html"]
},
{
    title: "Сайт 44",
    image: "site-4.jpg",
    description: "Описание процеса работы 4",
    tags: ["js", "html"]
}
];

var slider1 = document.querySelector(".slider1");
// var slider2 = document.querySelector(".slider2");

slider(slider1, data1, {
autoPlay: true,
speed: 3000
});
// slider(slider2, data2, {autoPlay: true});

/**
* Функция генерирующая слайдер слайдера
*
* @param elem - блок в котором будет слайдер
* @param data - набор данных
* @param params - набор параметров autoPlay, speed
*/
function slider(elem, data, params) {
var currentSlide = 0;
var dataLength = data.length;


var slider = elem;
var mainSlide = document.createElement("div");
var leftSlide = document.createElement("div");
var rightSlide = document.createElement("div");
var descrSlide = document.createElement("div");

mainSlide.classList.add("slide-main");
leftSlide.classList.add("slide-left");
rightSlide.classList.add("slide-right");
descrSlide.classList.add("slide-description");


slider.appendChild(mainSlide);
slider.appendChild(leftSlide);
slider.appendChild(rightSlide);
slider.appendChild(descrSlide);


leftSlide.addEventListener('click', function (e) {
    currentSlide = getSlide(currentSlide + 1);
    fillSlider();
});

rightSlide.addEventListener('click', function (e) {
    currentSlide = getSlide(currentSlide - 1);
    fillSlider();
});



function fillSlider() {
    // var img = document.createElement('img');
    // img.setAttribute("src", data[0].image);
    // mainSlide.appendChild(img);

    var prev = getSlide(currentSlide - 1);
    var next = getSlide(currentSlide + 1);

    mainSlide.innerText = data[currentSlide].title;
    leftSlide.innerText = data[prev].title;
    rightSlide.innerText = data[next].title;

    descrSlide.innerText = data[currentSlide].description;
}

function getSlide(value) {
    if (value >= dataLength) {
        return 0
    } else if (value < 0) {
        return dataLength - 1;
    } else {
        return value;
    }
}

function autoPlay(speed) {
    setInterval(function () {
        currentSlide = getSlide(currentSlide + 1);
        fillSlider();
    }, speed)
}

fillSlider();

if (params.autoPlay) {
    if (params.speed) {
        autoPlay(params.speed);
    } else {
        autoPlay(1000);
    }
}
}


// Патерн модуль(Common.js)
var slider = (function() {
var slideNext = function(slide) {

};

return {
    init: function() {
        
    }
}
}());

module.exports = slider;


/***** app.js *******/
slider = require('./slider');

// Обязательная проверка
if($('.slider').legth) {
slider.init();
}