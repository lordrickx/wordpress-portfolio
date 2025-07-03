(function($){
	$(document).ready(function(){
		$('.acro-pricing-table__content__plan').on('click', function(){
			const planClassName = 'down';
			const plan = $(this).data('plan');
			$('.acro-pricing-table__content__plan, .acro-pricing-table__plan_info, .acro-pricing-table__content .buy-btn .btn').removeClass('active up down');
			$(`.acro-pricing-table__content__plan[data-plan=${plan}]`).addClass('active');
			$('.acro-pricing-table__content .buy-btn .btn-' + plan).addClass('active');
			$('.acro-pricing-table__plan_info.plan-' + plan).addClass('active ' + planClassName);
		})
		$('.features-toggle').on('click', function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).parent().find('.features').slideToggle();
			}
			else {
				$('.features-toggle').removeClass('active');
				$(this).addClass('active');

				$('.acro-pricing-table__content__mobile .features').slideUp();
				$(this).parent().find('.features').slideToggle();
			}
		})
		if(window.innerWidth > 1025 && typeof gsap !== 'undefined' && $('.wp-block-acrobits-pricing-table-block').length){
			gsap.registerPlugin(ScrollTrigger);
			const ST = ScrollTrigger.create({
				trigger: ".acro-pricing-table__content",
				start: "-=180",
				end: "+=2000",
				onUpdate: enableCurrentPlan,
				pin: ".acro-pricing-table__content"
			});
		}
	})
	if($('.wp-block-acrobits-pricing-table-block').length){
		const offset = parseInt($('.acro-pricing-table__title').offset().top + 94);
		const scrolled = scrollY - offset;
		var currentSection = Math.round(scrolled / 500) <= 0 ? 0 : Math.round(scrolled / 500);
		$('.acro-pricing-table__content__plan, .acro-pricing-table__plan_info, .acro-pricing-table__content .buy-btn .btn').removeClass('active up down');
		$(`.acro-pricing-table__content__plan[data-plan=${currentSection}]`).addClass('active');
		$('.acro-pricing-table__content .buy-btn .btn-' + currentSection).addClass('active');
		$('.acro-pricing-table__plan_info.plan-' + currentSection).addClass('active');
	}

	function enableCurrentPlan(){
		const topOffset = parseInt($('.acro-pricing-table__title').offset().top + 94);
		const scrolledHeight = scrollY - topOffset;
		const plan =  Math.round(scrolledHeight / 500) <= 0 ? 0 : Math.round(scrolledHeight / 500);
		if(currentSection !== plan){
			const planClassName = currentSection > plan ? 'down' : 'up';
			currentSection = plan;
			$('.acro-pricing-table__content__plan, .acro-pricing-table__plan_info, .acro-pricing-table__content .buy-btn .btn').removeClass('active up down');
			$(`.acro-pricing-table__content__plan[data-plan=${plan}]`).addClass('active');
			$('.acro-pricing-table__content .buy-btn .btn-' + plan).addClass('active');
			$('.acro-pricing-table__plan_info.plan-' + plan).addClass('active ' + planClassName);
		}
	}
})(jQuery);