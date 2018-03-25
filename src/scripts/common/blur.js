var blur = (function () {
    var wrapper = document.querySelector('.form');
    var form = document.querySelector('.form__blur');

    return{
        set: function () {
            var imgWidth = document.querySelector('.section__background').offsetWidth;
            var posLeft = -wrapper.offsetLeft;
            var posTop = -wrapper.offsetTop;
            var blurCSS = form.style;

            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }
    }
}());


blur.set();

window.onresize = function () {
    blur.set();
}
