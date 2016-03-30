$(document).ready(function() {
	
	$(".scroll-to").on('click', function(){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 600);
		return false;
	});

	// popup
	$('.js-open-popup').on('click', function () {
		var this_ = $(this),
			parent = this_.parents('.js-popup-out'),
			popup = parent.find('.js-popup');
		if (!popup.hasClass('is-active')) {
			popup
			.fadeIn(200)
			.addClass('is-active');
			$('body').addClass('is-hidden');
		}
		else {
			$('body').removeClass('is-hidden');
			popup
			.fadeOut(200)
			.removeClass('is-active');
		}
		return false;
	});

	$('.popup__in').on('click', function (event) {
		event.stopPropagation();
	});
	$('.js-popup, .js-popup-close').on('click', function() {
		$('body').removeClass('is-hidden');
		$('.js-popup')
		.fadeOut(200)
		.removeClass('is-active');
	});

	
});