(function($){
	//sidebar
	$(window).on('load', function(){
		let gsapMm = gsap.matchMedia();

		let scrolling = false
		const topGap = $('#wpadminbar').length ? 140 : 108;

		gsapMm.add('(min-width: 1024px)', () => {
			gsap.to('.industry-page .page-sidebar', {
				opacity: 1,
				scrollTrigger: {
					trigger: '.industry-page .page-sidebar',
					start: `top top+=${topGap}`,
					end: 'bottom +=' + ($('.industry-page .page-sidebar').outerHeight() + topGap).toString(),
					scrub: 0.5,
					pin: true,
					endTrigger: ".industry-page .page-content__inner",
					// pinType: 'transform',
					pinSpacing: false,
					// pinSpacer: '.single_post_body__table-of-contents',
					toggleClass: 'active',
				}
			})
		})

		//interactive table of contents
		$('.industry-chapters .chapter').on('click', function(){
			$('.industry-chapters .chapter').removeClass('current');
			const target = $(this).data('target');
			let element = $(target);
			if(target.length){
				scrollToSegment(element);
				$(this).addClass('current');
			}
		})
		const scrollToSegment = (el) => {

			if(!el.length){
				return null
			}
			scrolling = true
			$('html, body').animate({
				scrollTop: el.offset().top - $('body > .header').outerHeight()
			}, 1000, 'swing', () => {
				scrolling = false
			});
		}

		const headingsObserver = new IntersectionObserver((el) => {
			let parent = $(el[0].target).closest("[class*='wp-block-acrobits']")
			if(parent.length && scrolling === false){
				let parentId = parent.attr('id')
				$('.industry-chapters .chapter').removeClass('current')
				$(`[data-target=#${parentId}]`).addClass('current');
			}
		}, {
			rootMargin: "-30px 0% -77%",
			threshold: 1
		});

		$('h1, h2').each(function(){
			headingsObserver.observe(this)
		})

	})
	$(document).ready(function(){
		if($(window).width() > 767){

			$('.other-industries__item').hover(function(){
				const index = $(this).index();
				const startIndex = Math.floor(index / 4) * 4;
				$(this).addClass('active-el');
				$('.other-industries__item').slice(startIndex, startIndex + 4).addClass('active-item').removeClass('not-active-item');
				$('.other-industries__item').not($('.other-industries__item').slice(startIndex, startIndex + 4)).addClass('not-active-item').removeClass('active-item');
			}, function(){
				$('.other-industries__item').removeClass('not-active-item active-item active-el');
			})
		}
	})
})(jQuery)