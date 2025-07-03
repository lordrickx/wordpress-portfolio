(function($){
	function isInViewport(element) {
		const { top, bottom } = element.getBoundingClientRect();
		const vHeight = (window.innerHeight || document.documentElement.clientHeight);
		return (
			(top > 0 || bottom > 600) &&
			top < vHeight
		);
	}

	jQuery(window).on('scroll', function(){
		jQuery('.acrobits_layered-images').each(function(){
			if(isInViewport(this)){
				jQuery(this).addClass('in-viewport');
			}
			else {
				jQuery(this).removeClass('in-viewport');
			}
		})
	})
})('jQuery');
