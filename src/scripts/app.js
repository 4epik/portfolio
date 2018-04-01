const flip = require('./common/flip');

const menu = require('./common/hamburger');

const map = require('./common/map');

const sidebar = require('./common/sidebar');

const slider = require('./common/slider');

//const water = require('./common/water');


const preloader = require('./common/preloader');

const blured = require('./common/blur');
const login = require('./common/login');





//preloader

if(document.getElementsByClassName('.preloader').length){
    
   preloader();
};

//flip

if(document.getElementsByClassName('.intro__button-link').length){
    flip();
};


//menu

if(document.getElementsByClassName('.hamburger_link').length){
    menu();
};

//map

if(document.getElementsByClassName('.google-map').length){
   map();
};

//slider
if(document.getElementsByClassName('.works__slider').length){
    slider.init();
    
};

//sidebar

if(document.getElementsByClassName('.blog__container').length){
    sidebar.init();
};



//water

//if(document.getElementsByClassName('.section').length){
  //  water();
//};




//blur

if(document.getElementsById('#form').length){
    blured();
    
};

//login form

if(document.getElementsByClassName('.login__form').length){
    login.inint();
};
