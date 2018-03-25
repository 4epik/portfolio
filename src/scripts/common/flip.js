
 $('#login').on('click', function(e) {
	e.preventDefault();
	
	$('#flipper').toggleClass('flipper-active');
	$('#button-container').toggleClass('login-button');
});

$('#intro').on('click', function(e) {
	e.preventDefault();
	
	$('#flipper').removeClass('flipper-active');
	$('#button-container').removeClass('login-button');
});
