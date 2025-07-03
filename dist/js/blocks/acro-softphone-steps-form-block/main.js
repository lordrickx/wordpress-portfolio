(function($){
	$(document).ready(function(){
		if($('.acrobits_softphone-steps-form').length > 0){
			stepAnimationInit();
			$(document).on('gform_page_loaded', function(event, form_id, current_page){
				changeStep(current_page);
				// acroRenameRadioButton();
			})
			
			$('body').on('click', '.gfield-choice-input', function(){
				$(this).closest('.gform_page').find('.gform_next_button').trigger('click');
			})
			

			
			// $('.acrobits_softphone-steps-form .step').on('click', function(){
			// 	changeStep($(this).text());
			// })

			window.addEventListener('message', function(event) {
				const current_page = $('.acrobits_softphone-steps-form').attr('data-step');
				if(typeof event.data !== 'undefined' && typeof event.data.ssaType !== 'undefined' && typeof event.data.name !== 'undefined' && event.data.ssaType === 'page'){
					if(parseInt(current_page) <= 4) return;
					$('#smooth-wrapper').css({
						"overflow": "unset",
						"overflow-x": "clip"
					});
					var current = '';
					if(event.data.name === 'date'){
						changeStep(5);
					}					
					if(event.data.name === 'time'){
						changeStep(6);
					}			
					if(event.data.name === 'formConfirmation'){
						changeStep(7);
					}
					
					// if(event.data.action === "timeSelected"){
					// 	$('.acrobits_softphone-steps-form').attr('data-step', 7);
					// }
					// else if(event.data.action === "dateSelected"){
					// 	$('.acrobits_softphone-steps-form').attr('data-step', 6);
					// }

				}
			});
			$('.acrobits_softphone-steps-form .gchoice').on('click', function(){
				console.log(123)
				$(this).closest('.gform_page').find('.gform_previous_button').trigger('click');
			})
		}
	})
	
	function stepAnimationInit(){
		var step1Mobile = gsap.timeline({repeat: -1});
		var img5 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-1 .img.img5');
		var img4 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-1 .img.img4');
		var img3 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-1 .img.img3');
		var img2 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-1 .img.img2');
		var img1 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-1 .img.img1');
		step1Mobile.to(img5, {y: 50, duration: 2, delay: 1}, "1%");
		step1Mobile.to(img4, {scale: 1.1, duration: 1}, "3%");
		step1Mobile.to(img3, {scale: 0.8, filter: "blur(1px)", duration: 1}, "3%");
		step1Mobile.to(img2, {scale: 0.8, filter: "blur(1px)", duration: 1, delay: 0.5}, "3%");
		step1Mobile.to(img1, {scale: 0.8, filter: "blur(1px)", duration: 1, delay: 0.7}, "3%");
		step1Mobile.to(img5, {y: 0, duration: 2}, "2%");
		step1Mobile.to(img4, {scale: 1, duration: 1}, "4%");
		step1Mobile.to(img3, {scale: 1, filter: "blur(0px)", duration: 1}, "4%");
		step1Mobile.to(img2, {scale: 1, filter: "blur(0px)", duration: 1, delay: 0.5}, "4%");
		step1Mobile.to(img1, {scale: 1, filter: "blur(0px)", duration: 1, delay: 0.7}, "4%");

		var step2Mobile = gsap.timeline({repeat: -1});
		var img5Step2 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-2 .img.img5');
		var img4Step2 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-2 .img.img4');
		var img3Step2 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-2 .img.img3');
		var img2Step2 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-2 .img.img2');

		step2Mobile.to(img3Step2, {scale: 1.3, x:"-25", y: "-15", duration: 1, delay: 2}, "3%");
		step2Mobile.to(img3Step2, {scale: 1, x:0, y: 0, duration: 1, delay: 2}, "5%");
		step2Mobile.to(img2Step2, {scale: 1.1, x:"15", y: "25", filter: "blur(0px)", opacity: 1, duration: 1, delay: 2}, "3%");
		step2Mobile.to(img2Step2, {scale: 1, x:0, y: 0, opacity: 0.3, filter: "blur(2.4025292397px)", duration: 1, delay: 2}, "5%");
		step2Mobile.to(img4Step2, {scale: 0.8, x:20, y: 30, filter: "blur(2px)", zIndex: 0, duration: 1, delay: 2}, "3%");
		step2Mobile.to(img4Step2, {scale: 1, x:0, y: 0, filter: "blur(0)", zIndex: 1, duration: 1, delay: 2}, "5%");
		step2Mobile.to(img5Step2, {scale: 1.1, x:20, y: -30, filter: "blur(0)", zIndex: 1, duration: 1, delay: 2}, "3%");
		step2Mobile.to(img5Step2, {scale: 1, x:0, y: 0, filter: "blur(2px)", zIndex: 1, duration: 1, delay: 2}, "5%");

		var step3Mobile = gsap.timeline({repeat: -1});
		var img6Step3 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-3 .img.img6');
		var img5Step3 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-3 .img.img5');
		var img4Step3 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-3 .img.img4');
		var img3Step3 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-3 .img.img3');
		var img2Step3 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-3 .img.img2');
		var img1Step3 = $('.acrobits_softphone-steps-form__bottom .acro-desktop-hidden .step-3 .img.img1');

		step3Mobile.to(img3Step3, {scale: 1.6, x: 0, y: 0, duration: 1, delay: 2}, "3%");
		step3Mobile.to(img3Step3, {scale: 1, x:0, y: 0, duration: 1, delay: 2}, "5%");
		step3Mobile.to(img5Step3, {scale: 1.6, x: 0, y: 0, opacity: 1, filter: "blur(0px)", duration: 1, delay: 2}, "3%");
		step3Mobile.to(img5Step3, {scale: 1, x:0, y: 0, opacity: 0.5, filter: "blur(2px)", duration: 1, delay: 2}, "5%");
		step3Mobile.to(img4Step3, {scale: 1.6, x: 0, y: 0, opacity: 1, filter: "blur(0px)", duration: 1, delay: 2}, "3%");
		step3Mobile.to(img4Step3, {scale: 1, x:0, y: 0, opacity: 0.5, filter: "blur(2px)", duration: 1, delay: 2}, "5%");
		step3Mobile.to(img6Step3, {scale: 0.8, x: 20, y: 30, opacity: 0.5, filter: "blur(2px)", duration: 1, delay: 2}, "3%");
		step3Mobile.to(img6Step3, {scale: 1, x: 0, y: 0, opacity: 1, filter: "blur(0px)", duration: 1, delay: 2}, "5%");
		step3Mobile.to(img1Step3, {scale: 0.8, x: 0, y: 0, opacity: 0.5, filter: "blur(2px)", duration: 1, delay: 2}, "3%");
		step3Mobile.to(img1Step3, {scale: 1, x: 0, y: 0, opacity: 1, filter: "blur(0px)", duration: 1, delay: 2}, "5%");
		step3Mobile.to(img2Step3, {scale: 0.8, x: 0, y: 0, opacity: 0.5, filter: "blur(2px)", duration: 1, delay: 2}, "3%");
		step3Mobile.to(img2Step3, {scale: 1, x: 0, y: 0, opacity: 1, filter: "blur(0px)", duration: 1, delay: 2}, "5%");
	}

	function changeStep(step) {
		$('.acrobits_softphone-steps-form').attr('data-step', step);
		$('.acrobits_softphone-steps-form .step').removeClass('active')
		$('.acrobits_softphone-steps-form .step'+step).addClass('active')
	}
})(jQuery);