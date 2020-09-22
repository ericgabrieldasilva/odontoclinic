$(function(){

	var positionHeader = $('header').offset().top;
	var heightHeader = $('header').outerHeight();
	var header = $('header');


	$(window).scroll(function(){
		var positionScroll = $(window).scrollTop();
		if (positionScroll >= (positionHeader + heightHeader)){
			header.addClass('header-fixed');
			$('nav.menu-mobile ul').css('top', '50px');
			$('div.ghost').css('height', heightHeader+'px');
		}else{
			header.removeClass('header-fixed');
			$('nav.menu-mobile ul').css('top', '88px');
			$('div.ghost').css('height', 0+'px');
		}
	});
	
	
	$('nav.menu-desktop a, nav.menu-mobile a, div.cta-home a, div.links a').click(function(event){
		event.preventDefault();
		var aid = $(this).attr('href');
		var y = $(aid).offset().top - heightHeader;
		$('html, body').animate({
			scrollTop: y
		}, 500);
	});


});