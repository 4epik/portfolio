var slider = (function(){

    var moveSlide = function(container){
        var items = container.find('.slider__control-item'),
        activeItems = items.filter('.active');

        console.log('items');
    };
    
    return{
        init: function(){
            $('.slider__controls-down').on('click', function(e){
                e.preventDefault();

                var firstSlider = $('.first')

                moveSlide(firstSlider);
            });


        }
    }
}());

$(function(){
    slider.init();
})