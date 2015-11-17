$(document).ready(function() {
	
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
	
});