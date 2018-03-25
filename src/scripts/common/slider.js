var slider = (function () {

  var counter = 1;
  var duration = 300;
  var inProcess = false;

  var moveSlider = function (container, direction) {


    var items = $('.slider__control-item', container);
    var  activeItem = items.filter('.active');
    var  direction = direction == 'down' ? 100 : -100;

    if (counter >= items.length) counter = 0 ;
    var reqItem = items.eq(counter) ;

    activeItem.animate({
      'top' : direction + '%'
    }, duration);

    reqItem.animate({
      'top' : '0'
    }, duration, function () {
      acriveItem.removeClass('active').css('top', -direction + '%');
      $(this).addClass('active');
      inProcess = false;
    });
  };

 
  return{
    init: function () {
      $('#slider').on('click', function (e) {
        e.preventDefault();

        if (!inProcess) {
          inProcess = true;
          moveslide($('.first'), 'down');
          moveSlide($('.opposite'), 'up'); }

        counter++;
      });
    }
       
  }
}());


$( function () {
  slider.init();
})

