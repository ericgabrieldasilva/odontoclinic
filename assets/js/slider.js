$(function(){

	var delay = 10000;
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();
	bulletClick();

	function initSlider(){
	 	amt = $('div.deposition').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('div.deposition').css('width', sizeBoxSingle+'%');
		$('div.scroll-wraper').css('width', sizeContainer+'%');

		for(var i = 0; i < amt; i++){
			if (i == 0){
				$('div.bullets-nav').append('<span class="bullet-active"></span>');
			}else{
				$('div.bullets-nav').append('<span></span>');
			}
		}

	}

	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if (curIndex == amt){
				curIndex = 0;
			}
			goToSlider(curIndex);

		}, delay);
	}

	function goToSlider(curIndex){
		var offSetX = $('.deposition').eq(curIndex).offset().left - $('div.scroll-wraper').offset().left;
		$('div.bullets-nav span').removeClass('bullet-active');
		$('div.bullets-nav span').eq(curIndex).addClass('bullet-active');
		$('div.scroll-deposition').stop().animate({
			scrollLeft: offSetX
		});
	}

	function bulletClick(){
		$('div.bullets-nav span').click(function(){
			curIndex = $(this).index();
			goToSlider(curIndex);
		});
	}

	//Slider galery

	$('.galery').slick({
		centerMode: true,
		slidesToShow: 6,
		arrows: false,
		responsive:[
			{
				breakpoint: 1280,
				settings:{
					arrows: false,
					centerMode: true,
					slidesToShow: 4
				}
			},

			{
				breakpoint: 768,
				settings:{
					arrows: false,
					centerMode: true,
					slidesToShow: 3
				}
			},

			{
				breakpoint: 580,
				settings:{
					arrows: false,
					centerMode: true,
					slidesToShow: 2
				}
			},

			{
				breakpoint: 380,
				settings:{
					arrows: false,
					centerMode: true,
					slidesToShow: 1
				}
			}

		]
	});

});