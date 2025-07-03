(function($){
	$(document).ready(function(){
		if( $('.acro-slider-with-text__slides .slides').length){
			$('.acro-slider-with-text__slides .slides').slick({
				dots: false,
				arrows: false,
				infinite: true,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 1,
			});
		}
	})
})(jQuery);