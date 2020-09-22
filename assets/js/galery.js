$(function(){
	var link;

	$('div.image-single').click(function(e){
		link = $(this).attr('data-image');
		$('img.image-modal').attr('src', link);
		$('div.modal').fadeIn().css('display','flex');
		$('body').css('overflow', 'hidden');
		$('header').css('display', 'none');
	});
	
	$('img.image-modal').click(function(e){
		e.stopPropagation();
	});
	
	$('div.modal, div.btn-close').click(function(){
		$('body').css('overflow', 'visible');
		$('img.image-modal').attr('src', '');
		$('div.modal').fadeOut();
		$('header').css('display', 'block');
	});

	

});
