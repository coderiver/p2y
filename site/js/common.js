$(document).ready(function() {
	
	$('.js-slider, .js-inform-slider, .js-question-slider, .js-services').on('init', function(slick){
		$(this).addClass('is-init');
	});
	
	// slider
	$('.js-slider').slick({
		slidesToShow 	: 1,
		slidesToScroll 	: 1,
		autoplay		: true,
		dots 			: true,
		arrows 			: false,
		infinite 		: true,
		speed 			: 500,
		fade 			: true,
		cssEase 		: 'linear'
	});

	$('.js-inform-slider').slick({
		slidesToShow 	: 1,
		slidesToScroll 	: 1,
		autoplay 		: false,
		dots 			: false,
		infinite 		: true,
		speed 			: 500,
		cssEase 		: 'linear'
	});

	function servSlider(){
		$('.js-services').each(function(){
			var slider = $(this),
				width = $(window).width();
			if (width < 1010) {
				setTimeout(function(){
					slider.slick({
						slidesToShow 	: 1,
						autoplay 		: false,
						dots 			: false,
						infinite 		: true,
						speed 			: 500,
						adaptiveHeight 	: true,
						cssEase 		: 'linear'
					});
				}, 100);
			}
			else if (width >= 1010 && slider.hasClass('is-init')) {
				slider.slick('unslick');
			}
		});
	}
	servSlider();

	$(window).resize(function() {
		servSlider();
	});

	$('.js-question-slider').on('init', function(slick){
		var this_ 	= $(this),
			dots  	= this_.find('.slick-dots'),
			bot  	= this_.find('.js-question-bot');
		dots.appendTo(bot);
	});

	$('.js-question-slider').slick({
		slidesToShow: 1,
		autoplay	: false,
		dots 		: true,
		infinite 	: true,
		speed 		: 500,
		cssEase 	: 'linear',
		responsive 	: [
			{
				breakpoint: 768,
				settings: {
					adaptiveHeight 	: true,
					autoplay		: true,
					dots 			: false
				}
			}
		]
	});

	// accordion
	function accord() {
		$('.js-accord').each(function() {
			var this_ 	= $(this),
				block 	= this_.find('.js-accord-block');
			if (this_.hasClass('is-active')) {
				block.show();
			}
		});
		$('.js-accord-but').on('click', function() {
			var this_ 		= $(this),
				parent 		= this_.parents('.js-accord'),
				blockThis 	= parent.find('.js-accord-block');
				accord 		= $('.js-accord'),
				block 		= accord.find('.js-accord-block');
			if (!parent.hasClass('is-active')) {
				accord.removeClass('is-active');
				block.slideUp(300);
				parent.addClass('is-active');
				blockThis.slideDown(300);
			}
			else {
				parent.removeClass('is-active');
				blockThis.slideUp(300);
			}
			return false;
		});
	} accord();

	// card-focus
	$('.js-card input').on('focus', function(){
		var parent = $(this).parents('.js-card');
		parent.addClass('is-active');
	});
	$('.js-card input').on('blur', function(){
		var parent = $(this).parents('.js-card');
		parent.removeClass('is-active');
	});

	// menu
	$('.js-btn-menu').on('click', function(event){
		$('.js-header-block').toggleClass('is-active');
		event.stopPropagation();
	});
	$('body').on('click', function(){
		$('.js-header-block').removeClass('is-active');
	});

	// hammer
	var item = $('.js-simile-item'),
		touch = item.hammer();
	touch
	.on('swipeleft', function(ev) {
		var this_ = $(this);

		if (this_.hasClass('is-right')){
			this_.removeClass('is-right');
			return false;
		}
		else {
			this_.addClass('is-left');
		}
	})
	.on('swiperight', function(ev) {
		var this_ = $(this);

		if (this_.hasClass('is-left')){
			this_.removeClass('is-left');
			return false;
		}
		else {
			this_.addClass('is-right');
		}
	});

	$(".scroll-to").on('click', function(){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 600);
		return false;
	});
	
});