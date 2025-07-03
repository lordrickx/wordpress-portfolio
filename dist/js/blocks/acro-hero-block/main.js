(function($){
	$(document).ready(function(){
		function slickify(){
			$('.acrobits_hero__slides').slick({
				dots: false,
				arrows: true,
				infinite: false,
				speed: 1500,
				autoplay: true,
				autoplaySpeed: 4000,
				slidesToShow: 1,
				cssEase: 'linear',
				nextArrow:"<button type='button' class='slick-next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\">\n" +
					"<path d=\"M6.61499 20.23L8.38499 22L18.385 12L8.38499 2L6.61499 3.77L14.845 12L6.61499 20.23Z\" fill=\"#7048C7\"/>\n" +
					"</svg></button>",
				prevArrow:"<button type='button' class='slick-prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\">\n" +
					"<path d=\"M18.385 3.77L16.615 2L6.61499 12L16.615 22L18.385 20.23L10.155 12L18.385 3.77Z\" fill=\"#7048C7\"/>\n" +
					"</svg></button>"
			});
			
		}
		slickify();

		var slickEnabled = $(window).width() < 768;

		if(!slickEnabled){
			$('.acrobits_hero__slides').slick('unslick');
		}
		
		$('.acroPopup__close').on('click', function(){
			$(this).closest('.acroPopup').fadeOut();
		})

		const handleResize = () => {
			const { innerHeigh, innerWidth } = window;
			var width = $(window).width();
			var isMobile = width < 768;

			if (isMobile && !slickEnabled) {
				slickEnabled = true;
				slickify();
			} else if (!isMobile && slickEnabled) {
				slickEnabled = false;
				$('.acrobits_hero__slides').slick('unslick');
			}
		}

		const handleResizeThrottled = throttle(handleResize, 100);

		window.addEventListener('resize', handleResizeThrottled);
	})
})(jQuery);

function throttle(fn, time) {
	let timeout = null;
	return function () {
		if(timeout) return;
		const context = this;
		const args = arguments;
		const later = () => {
			fn.call(context, ...args);
			timeout = null;
		}
		timeout = setTimeout(later, time);
	}
}
