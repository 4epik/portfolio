var blur = (function () {
    var wrapper = document.querySelector('.form');
    var form = document.querySelector('.form__blur');

    return{
        set: function () {
            var imgWidth = document.querySelector('.section_comment').offsetWidth;
            var imgHeight = document.querySelector('.section_comment').offsetHeight;
            var posLeft = -wrapper.offsetLeft;
            var posTop = -wrapper.offsetTop;
            var blurCSS = form.style;

            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + imgHeight + 'px';
             
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }
    }
}());






module.exports = blur;
