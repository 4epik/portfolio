const flip = require('./common/flip');

const menu = require('./common/hamburger');

const map = require('./common/map');

const sidebar = require('./common/sidebar');

const slider = require('./common/slider');

const water = require('./common/water');


const preloader = require('./common/preloader');

const blured = require('./common/blur');
//const login = require('./common/login');


//map

if(document.getElementsByClassName('google-map').length){
    map();
 };

//preloader


    
   preloader.init();

//water

var container = document.getElementById('webgl');
var widthContainer = container.offsetWidth;
var mobile = false;



window.onresize = function () {
    widthContainer = container.offsetWidth;
    console.log(widthContainer);
    if(  widthContainer < 769 ) {
      mobile = true;
      container.style.display = 'none';
     
    }
    
    else ( widthContainer > 769 ) {
        container.style.display = 'block';
      water.init();
     
    } ;
  };



//if(document.getElementsByClassName('section').length){
//    water.init();
 //};


//flip

if(document.getElementsByClassName('intro__button-link').length){
    flip();
};


//menu

if(document.getElementsByClassName('hamburger_link').length){
    menu();
};





//slider
if(document.getElementsByClassName('works__slider').length){
    slider.init();
    
};

//sidebar

if(document.getElementsByClassName('blog__container').length){
    sidebar.init();
};



//blur

if(document.getElementById('form')){
    blured.set();
    window.onresize = function () {
        blured.set();
    }
    
};

//login form

//if(document.getElementsByClassName('login__form').length){
//    login.init();
//};
