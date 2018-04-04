

 

var sidebarContainer = document.querySelector('.content__left');
var texts = document.querySelectorAll('.blog__item');
var links = document.querySelectorAll('.sidebar__item');
var textsOffset = [];

console.log(sidebarContainer);

texts.forEach(function(text){
	textsOffset.push(text.offsetTop);	
});


console.log(textsOffset);

window.addEventListener('scroll', function(){
	textsOffset.forEach(function(offset, i){
  		if (window.pageYOffset >= offset) {
				links.forEach(function(el, i) {
					el.classList.remove('active');
				})
      	links[i].classList.add('active');
      } 
  })
})

$('#sidebar').on('click', function(e) {
    e.preventDefault();


    
   
	if($('.content__left').hasClass('active')){
        $('.content__left').removeClass('active');
    }

    else{
        $('.content__left').addClass('active');
    }
    
});

