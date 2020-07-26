$(function(){

	var header = $('header');
	
	$('nav.menu-mobile h2, nav.menu-mobile a').click(function(){
		var menu = $('nav.menu-mobile ul');
		var icon = $('nav.menu-mobile h2 i');
		if (menu.is(':hidden')){
			menu.slideDown();
			icon.removeClass('fa-bars').addClass('fa-times');
			header.css('background-color', '#78B8FF');
		}else if (menu.is(':visible')){
			menu.slideUp();
			icon.removeClass('fa-times').addClass('fa-bars');
			header.css('background', 'none');
		}
	});

});