$(document).ready(function () {
    
    //nav
    
	$('#navburger').click(function(){
		$(this).toggleClass('open');
        $('.nav').toggleClass('on');
        $('.nav ul').toggleClass('up');
        $('.nav li').toggleClass('open');
	});
    
    $(function () {
    setInterval(function () {
        $('.top').fadeOut(1500).delay(5000).fadeIn(1500).delay(5000);
    }, 5000);
});
    
});