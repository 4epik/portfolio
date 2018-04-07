var slider = (function () {

  var counter = 1;
  var duration = 300;
  var inProcess = false;

  var moveSlideLeft = function (container, direction){
    
    var itemsLeft = $('.left__slider-item', container);
    var activeItemLeft = itemsLeft.filter('.active');
    var directionLeft = direction == 'left' ? 100 : -100;

    if (counter >= itemsLeft.length) counter = 0 ;
    var reqItemLeft = itemsLeft.eq(counter) ;

          activeItemLeft.animate({
                'right' : directionLeft + '%'
              }, duration);

              reqItemLeft.animate({
                'right' : '0'
              }, duration, function () {
                activeItemLeft.removeClass('active').css('right', -directionLeft + '%');
                $(this).addClass('active');
                inProcess = false;
              });
  
}

  var moveSlideTop = function (container, direction){
      
      var itemsTop = $('.slider__item', container);
      var activeItemTop = itemsTop.filter('.active');
      var directionTop = direction == 'left' ? 100 : -100;

      if (counter >= itemsTop.length) counter = 0 ;
      var reqItemTop = itemsTop.eq(counter) ;

            activeItemTop.animate({
                  'right' : directionTop + '%'
                }, duration);

                reqItemTop.animate({
                  'right' : '0'
                }, duration, function () {
                  activeItemTop.removeClass('active').css('right', -directionTop + '%');
                  $(this).addClass('active');
                  inProcess = false;
                });
    
  }

  var moveSlide = function (container, direction) {






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
      activeItem.removeClass('active').css('top', -direction + '%');
      $(this).addClass('active');
      inProcess = false;
    });
  };

 
  return{
    init: function () {
      $('#sliderdown').on('click', function (e) {
        e.preventDefault();

        if (!inProcess) {
          inProcess = true;
          moveSlide($('.first'), 'down');
          moveSlide($('.opposite'), 'up'); 
          moveSlideTop($('.works__slider'), 'right');
          moveSlideLeft($('.left__slider'), 'right');
        }

        counter++;
      });

      $('#sliderup').on('click', function (e) {
        e.preventDefault();

        if (!inProcess) {
          inProcess = true;
          moveSlide($('.first'), 'up');
          moveSlide($('.opposite'), 'down');
          moveSlideTop($('.works__slider'), 'left');
          moveSlideLeft($('.left__slider'), 'left');
        }

        counter++;
      });
    }
       
  }
}());


$( function () {
  slider.init();
})

