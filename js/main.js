$(document).ready(function () {
    
    //nav
    
	$('#navburger').click(function(){
		$(this).toggleClass('open');
        $('.nav').toggleClass('on');
        $('.nav ul').toggleClass('up');
        $('.nav li').toggleClass('open');
        
	});
    
});