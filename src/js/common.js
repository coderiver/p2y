$(document).ready(function() {
	
	$('.js-slider, .js-inform-slider, .js-question-slider').on('init', function(slick){
		$(this).addClass('is-init');
	});
	
	// slider
	$('.js-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	$('.js-inform-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		speed: 500,
		cssEase: 'linear'
	});

	$('.js-question-slider').on('init', function(slick){
		var this_ = $(this),
			dots = this_.find('.slick-dots'),
			bot = this_.find('.js-question-bot');
		dots.appendTo(bot);
	});

	$('.js-question-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear'
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

	// tab
	function tab() {
		$(".js-tab").each(function(){
			var tab_link 	= $(this).find("a"),
				tab_item 	= $(this).find("li"),
				index 		= tab_link.attr("href"),
				parents 	= $(this).parents(".js-tab-group"),
				tab_cont 	= parents.find(".js-tab-cont");
			tab_link.on("click", function() {
				var index = $(this).attr("href");
				tab_item.removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.fadeOut(0);
				parents.find("."+index).fadeIn(300);
				return false;
			});
			$(this).find('li:first').addClass("is-active");
			parents.find("."+index).show();
		});
	}
	tab();
	
});