!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";var o=document.querySelector(".login__form"),r=(o.querySelector("#loginbtn"),o.querySelector("#login"),o.querySelector("#pass"),o.querySelectorAll(".field"));o.addEventListener("submit",function(e){e.preventDefault();for(var t=o.querySelectorAll(".login__name"),n=t.querySelectorAll(".login__img"),i=o.querySelectorAll(".error"),l=0;l<i.length;l++)$(i[l]).removeClass("active"),$(t[l]).removeClass("login-error","login-active"),$(n[l]).removeClass("icon-error","icon-active");for(l=0;l<r.length;l++)r[l].value?($(t[l]).addClass("login-active"),$(n[l]).addClass("icon-active")):(console.log("field is blank",r[l]),$(i[l]).addClass("active"),$(t[l]).addClass("login-error"),$(n[l]).addClass("icon-error"))})},function(e,t,n){"use strict";var o=function(){var e=document.querySelector(".form"),t=document.querySelector(".form__blur");return{set:function(){var n=document.querySelector(".section_comment").offsetWidth,o=document.querySelector(".section_comment").offsetHeight,r=-e.offsetLeft,i=-e.offsetTop,l=t.style;l.backgroundSize=n+"px "+o+"px",l.backgroundPosition=r+"px "+i+"px"}}}();o.set(),window.onresize=function(){o.set()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=0,r=$(".preloader"),i=$("*").map(function(e,t){var n=$(t).is("img"),o=$(t).css("background-image"),r="";if("none"!=o&&(r=o.replace('url("',"").replace('")',"")),n&&(r=$(t).attr("src")),r)return r}).toArray();t.default=function(){var e;(e=i).length&&e.forEach(function(e,t,n){$("<img>",{attr:{src:e}}).on("load error",function(){o++,function(e,t){var n=Math.ceil(t/e*100);$(".preloader__percents").text(n+"%"),n>=100&&r.fadeOut()}(n.length,o)})})}},function(e,t,n){"use strict";var o=function(){var e=1,t=!1,n=function(n,o){var r=$(".left__slider-item",n),i=r.filter(".active"),l="left"==o?100:-100;e>=r.length&&(e=0);var c=r.eq(e);i.animate({right:l+"%"},300),c.animate({right:"0"},300,function(){i.removeClass("active").css("right",-l+"%"),$(this).addClass("active"),t=!1})},o=function(n,o){var r=$(".slider__item",n),i=r.filter(".active"),l="left"==o?100:-100;e>=r.length&&(e=0);var c=r.eq(e);i.animate({right:l+"%"},300),c.animate({right:"0"},300,function(){i.removeClass("active").css("right",-l+"%"),$(this).addClass("active"),t=!1})},r=function(n,o){var r=$(".slider__control-item",n),i=r.filter(".active");o="down"==o?100:-100,e>=r.length&&(e=0);var l=r.eq(e);i.animate({top:o+"%"},300),l.animate({top:"0"},300,function(){i.removeClass("active").css("top",-o+"%"),$(this).addClass("active"),t=!1})};return{init:function(){$("#sliderdown").on("click",function(i){i.preventDefault(),t||(t=!0,r($(".first"),"down"),r($(".opposite"),"up"),o($(".works__slider"),"right"),n($(".left__slider"),"right")),e++}),$("#sliderup").on("click",function(i){i.preventDefault(),t||(t=!0,r($(".first"),"up"),r($(".opposite"),"down"),o($(".works__slider"),"left"),n($(".left__slider"),"left")),e++})}}}();$(function(){o.init()})},function(e,t,n){"use strict";var o=document.querySelector(".content__left"),r=document.querySelectorAll(".blog__item"),i=document.querySelectorAll(".sidebar__item"),l=[];console.log(o),r.forEach(function(e){l.push(e.offsetTop)}),console.log(l),window.addEventListener("scroll",function(){l.forEach(function(e,t){window.pageYOffset>=e&&(i.forEach(function(e,t){e.classList.remove("active")}),i[t].classList.add("active"))})}),$("#sidebar").on("click",function(e){e.preventDefault(),$(".content__left").hasClass("active")?$(".content__left").removeClass("active"):$(".content__left").addClass("active")})},function(e,t,n){"use strict"},function(e,t,n){"use strict";$("#toggle").click(function(){$(this).toggleClass("active"),$("#overlay").toggleClass("open")})},function(e,t,n){"use strict";$("#login").on("click",function(e){e.preventDefault(),$("#flipper").toggleClass("flipper-active"),$("#button-container").toggleClass("login-button")}),$("#intro").on("click",function(e){e.preventDefault(),$("#flipper").removeClass("flipper-active"),$("#button-container").removeClass("login-button")})},function(e,t,n){"use strict";var o=n(7),r=n(6),i=n(5),l=n(4),c=n(3),s=n(2),a=n(1),u=n(0);document.getElementsByClassName(".preloader").length&&s(),document.getElementsByClassName(".intro__button-link").length&&o(),document.getElementsByClassName(".hamburger_link").length&&r(),document.getElementsByClassName(".google-map").length&&i(),document.getElementsByClassName(".works__slider").length&&c.init(),document.getElementsByClassName(".blog__container").length&&l.init(),document.getElementsById("#form").length&&a(),document.getElementsByClassName(".login__form").length&&u.inint()}]);