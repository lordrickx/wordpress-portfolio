(function($){
	$(document).ready(function(){
		$('body').on('click', '.acrobits_softphone-forms_style-1 .gform_wrapper .gform_fields .gfield--type-radio .gfield_label, .acrobits_softphone-forms_style-1 .gform_wrapper .gform_fields .gfield--type-radio [type="radio"]', function(){
			$(this).closest('.gfield--type-radio').find('.ginput_container_radio').slideToggle();
		})
		$('body').on('click', '.acrobits_softphone-forms_style-1 .gform_wrapper .gform_fields .gfield--type-radio [type="radio"]', function(){
			$(this).closest('.gfield--type-radio').addClass('active');
		})
		acroRenameRadioButton();
		
	})

	if ($('.acro_form_6_wrapper').length > 0) {
		if($('#acro_about').length > 0) {
			var elementToMove = $('#acro_about').detach()
			elementToMove.insertBefore('.gform_next_button')
		}

	}

	$(document).on('gform_page_loaded', function(event, form_id, current_page){
		if ($('.acro_form_6_wrapper').length > 0) {
			if($('#acro_about').length > 0) {
				var elementToMove = $('#acro_about').detach()
				elementToMove.insertBefore('.gform_next_button')
			}
		}
	})

	if($('.acrobits_softphone-forms').length > 0){
		$(document).on('gform_page_loaded', function(event, form_id, current_page){
			$('.acrobits_softphone-forms').attr('data-current_page', current_page);
			acroRenameRadioButton();
		})
	}
	
	function acroRenameRadioButton(){
		$('.acrobits_softphone-forms_style-1 .gfield--type-radio').each(function(){
			renameElement($(this), 'div');
		})
	}
	function renameElement($element,newElement){

		$element.wrap("<"+newElement+">");
		var $newElement = $element.parent();

		//Copying Attributes
		$.each($element.prop('attributes'), function() {
			$newElement.attr(this.name,this.value);
		});

		$element.contents().unwrap();

		return $newElement;
	}

	if($('.acrobits_softphone-forms').length > 0){
		window.addEventListener('message', function(event) {
			if(typeof event.data !== 'undefined' && typeof event.data.ssaType !== 'undefined' && typeof event.data.name !== 'undefined' && event.data.ssaType === 'page'){
				if(event.data.name === 'date'){
					$('.acrobits_softphone-forms').attr('data-current_page', 2);
				}
				if(event.data.name === 'time'){
					$('.acrobits_softphone-forms').attr('data-current_page', 3);
				}
				if(event.data.name === 'formConfirmation'){
					$('.acrobits_softphone-forms').attr('data-current_page', 4);
					if($('.acrobits_softphone-forms_style-2 .image-slider').length){
						$('.acrobits_softphone-forms_style-2 .image-slider').slick({
							slidesToShow: 1,
							autoplay: true,
							autoplaySpeed: 2000,
							dots: false,
							arrows: false,
							infinite: true,
							fade: true,
							cssEase: 'linear'
						})
					}
				}
			}
			// if(typeof event.data !== 'undefined' && typeof event.data.action !== 'undefined'){
			// 	if(event.data.action === "timeSelected"){
			// 		$('.acrobits_softphone-forms').attr('data-current_page', 4);
			// 		if($('.acrobits_softphone-forms_style-2 .image-slider').length){
			// 			$('.acrobits_softphone-forms_style-2 .image-slider').slick({
			// 				slidesToShow: 1,
			// 				autoplay: true,
			// 				autoplaySpeed: 2000,
			// 				dots: false,
			// 				arrows: false,
			// 				infinite: true,
			// 				fade: true,
			// 				cssEase: 'linear'
			// 			})
			// 		}
			// 	}
			// 	else if(event.data.action === "dateSelected"){
			// 		$('.acrobits_softphone-forms').attr('data-current_page', 3);
			// 	}
			//
			// }
		});
	}

})(jQuery);