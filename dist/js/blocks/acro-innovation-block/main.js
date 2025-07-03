(function($){
	$(document).ready(function(){
		$('.acro-innovations-block .list-item__image-wrapper').on('click', function(){
			let link = $(this).closest('.list-item').find('a');
			if(link){
				window.open(link.attr('href'), "_blank");
			}
		})
	})
})(jQuery);