jQuery(function ($) {
	function delay(t, val) {
		return new Promise(resolve => setTimeout(resolve, t, val));
	}

	$(window).on('load', function () {
		let scrolling = false
		let gsapMm = gsap.matchMedia()

		gsapMm.add('(min-width: 1024px)', () => {
			gsap.to('.single_post_body__table-of-contents > .table-of-contents__wrapper', {
				opacity: 1,
				scrollTrigger: {
					trigger: '.single_post_body__table-of-contents',
					start: `top top+=138`,
					end: 'bottom +=' + ($('.single_post_body__table-of-contents > .table-of-contents__wrapper').outerHeight() + 138).toString(),
					scrub: 0.5,
					pin: true,
					// pinType: 'transform',
					pinSpacing: false,
					// pinSpacer: '.single_post_body__table-of-contents',
					toggleClass: 'active',
				}
			})
		})

		let newsLetterStickySelector = '.single_post_body__author-info .newsletter_bar.always_sticky'
		let newsLetterSticky = $(newsLetterStickySelector)


		// newsLetterSticky.on('DOMNodeInserted', 'form', function () {
		if(newsLetterSticky.length > 0){
			gsapMm.add('(min-width: 1024px)', () => {
				let authorInfo = $('.single_post_body__author-info .author_info')
				let authorInfoHeight = 0;
				if(authorInfo.length) {
					authorInfoHeight = authorInfo.outerHeight(true);
				}

				gsap.to('.single_post_body__author-info .newsletter_bar.always_sticky', {
					scrollTrigger: {
						trigger: '.single_post_body__author-info',
						start: `top+=${authorInfoHeight} top+=138`,
						end: `bottom-=${newsLetterSticky.outerHeight() + 138}`,
						scrub: 0.5,
						pin: true,
						pinSpacing: false,
						// markers: true,
						// toggleClass: 'active',
					}
				})
			})
		}

		// })


		let newsLetterStickyAt50Selector = '.single_post_body__author-info .newsletter_bar.hide_and_show_after_50'
		let newsLetterStickyAt50 = $(newsLetterStickyAt50Selector)
		if(newsLetterStickyAt50.length > 0) {
			let fadeIn = false
			let fadeOut = false

			gsapMm.add('(min-width: 1024px)', () => {
				let authorInfo = $('.single_post_body__author-info>.author_info')
				let authorInfoHeight = 0;
				if(authorInfo.length) {
					authorInfoHeight = authorInfo.outerHeight(true);
				}

				gsap.to(newsLetterStickyAt50Selector, {
					scrollTrigger: {
						trigger: '.single_post_body__author-info',
						start: `top+=${authorInfoHeight + newsLetterStickyAt50.outerHeight(true)} top`,
						end: `bottom-=${newsLetterStickyAt50.outerHeight() + 138}`,
						scrub: 0.5,
						pin: true,
						// markers: true,
						pinSpacing: false,
						onUpdate: (instance) => {
							if (window.innerWidth < 1024) {
								instance.disable()
							} else {
								instance.enable()
							}
							if (instance.progress > 0.5) {
								fadeOut = false
								if (!fadeIn) {
									fadeIn = gsap.to(newsLetterStickyAt50Selector, {y: newsLetterStickyAt50.outerHeight() + 138})
								}
							} else {
								fadeIn = false
								if (!fadeOut) {
									gsap.to(newsLetterStickyAt50Selector, {y: 0})
								}
							}
						}
					}
				})
			})
		}



		const $carouselWrapper = $('.single_post_body__content .chapters__items-list')
		const $carouselItems = $carouselWrapper.find('.chapters__item')
		const $tableOfContentWrapper = $('.single_post_body__table-of-contents')

		let carousel = new Glider($carouselWrapper[0], {
			slidesToShow: 'auto',
			slidesToScroll: 1,
			exactWidth: false,
			itemWidth: 200,
			// scrollLock: true,
			dragVelocity: 1,
			scrollPropagate: true,
			draggable: true,
			arrows: {
				prev : '.chapters__arrows .prev',
				next: '.chapters__arrows .next'
			}
		})

		$carouselWrapper.on('mousemove', function () {
			if ($carouselWrapper.hasClass('drag') && !$carouselWrapper.hasClass('still-dragging')) {
				$carouselWrapper.addClass('still-dragging')
			}
		})


		$carouselWrapper.on('mouseup', async function () {
			let cxt = this
			await delay()
			$(cxt).removeClass('still-dragging')
		})

		$carouselWrapper.on('click', '.chapters__item', function (e) {
			e.preventDefault()
			let cxt = this

			if ($carouselWrapper.hasClass('still-dragging')) {
				return  false
			}

			const id = $(cxt).find('a').attr('href') ?? null

			$carouselItems.removeClass('current')
			$(cxt).addClass('current')

			if (!id) {
				return null;
			}

			scrollToSegment(id)
			changeTableOfContents(id)
		})


		$carouselWrapper.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			const $currentEl = $(slick.$slides.get(nextSlide));
			const id = ($currentEl.find('a').attr('href')) ?? null

			if (!id) {
				return null;
			}

			scrollToSegment(id)
			changeTableOfContents(id)
		});

		const changeTableOfContents = (id) => {
			const $item = $tableOfContentWrapper.find(`a[href$='${id}']`)

			$tableOfContentWrapper.find('.active').removeClass('active')
			$item.parent().addClass('active')
		}

		$tableOfContentWrapper.find('.table-of-contents__item').click(function (el) {
			el.preventDefault()
			$tableOfContentWrapper.find('.table-of-contents__item').removeClass('active')
			let itemIndex = $(el.currentTarget).index()
			$(el.currentTarget).removeClass('active').addClass('active')
			$carouselItems.removeClass('current')
			$($carouselItems[itemIndex]).addClass('current').click()
			carousel.scrollItem(itemIndex)
		})


		$tableOfContentWrapper.find('h5').click(function (el) {

			if (window.innerWidth > 1024) {
				return null
			}

			$(el.currentTarget).toggleClass('opened')
			$tableOfContentWrapper.find('.table-of-contents__items').slideToggle()
		})

		const scrollToSegment = (id) => {

			if (!$(id).length) {
				return null
			}
			scrolling = true
			$('html, body').animate({
				scrollTop: $(id).offset().top - $(id).outerHeight() - $('body > .header').outerHeight()
			}, 1000, 'swing', () => {
				scrolling = false
			});
		}

		const headingsObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !scrolling) {
					const id = $(entry.target).attr('id')
					$tableOfContentWrapper.find('.table-of-contents__item').removeClass('active')
					$(`[href=#${id}]`).parent('.table-of-contents__item').addClass('active');
				}
			})
		}, {
			rootMargin: "-30px 0% -77%",
			threshold: 1
		});

		$('h2').each(function () {
			headingsObserver.observe(this)
		})



		// 	links target blank
		const link_exceptions = single_post_vars.link_exceptions.split(',');
		$('.single_post_body__content__inner a').each(function(){
			const href = $(this).attr('href');

			if(href && !href.startsWith('#') && !$(this).attr('target') && !link_exceptions.includes($(this).attr('href'))) {
				$(this).attr('target', '_blank');
			}
		})

		if($('.newsletter_bottom_bar.enable_sticky').length){
			$(window).scroll(function(){
				if($(this).scrollTop() > $(document).height() / 2 && !$('.newsletter_bottom_bar.enable_sticky').hasClass('sticky-bar')){
					$('.newsletter_bottom_bar.enable_sticky').addClass('sticky-bar')
				}
			})
		}
	})
	$(document).ready(function(){
		$('.newsletter_bottom_bar .acro-close-btn').on('click', function(){
			$(this).parent().removeClass('sticky-bar enable_sticky');
		})
	})
	
	$(window).load(function () {
		$('table').each(function () {
			let table = $(this);
			table.wrap('<div class="scrollable-table-container scrolledLeft"><div class="scrollable-table-wrapper"><div class="scrollable-table"></div></div></div>')
			const container = table.closest('.scrollable-table-container');
			var arrowsClass = container.innerWidth() >= container.find('table').first().innerWidth() ? 'hidden' : '';
			container.append('<div class="table-arrows ' + arrowsClass + '"><span class="table-left-arrow table-arrow"></span><span class="table-right-arrow table-arrow active"></span></div>');
			// if(table.innerWidth() > container.innerWidth()){
			// 	container.append('<div class="table-arrows"><span class="table-left-arrow table-arrow"></span><span class="table-right-arrow table-arrow active"></span></div>');
			// }
			
			if(table.find('tr').length > 6){
				if(table.closest('.scrollable-table-container').find('.table-arrows').length){
					gsap.to(table.closest('.scrollable-table-container').find('.table-arrows'), {
						// opacity: 1,
						// y: 300,
						scrollTrigger: {
							trigger: table.closest('.scrollable-table-container'),
							start: `top top`,
							end: 'bottom-=400',
							pin: table.closest('.scrollable-table-container').find('.table-arrows'),
							toggleClass: 'active',
						}
					})
				}
			}
			else {
				container.addClass('small-table');
			}

			updateVisibleColumns(table.closest('.scrollable-table-wrapper'));
		})
		
		scrollTableInit();
	})
	
	function showHideArrows(container){
		$('table').each(function () {
			const container = $(this).closest('.scrollable-table-container');
			if($(this).innerWidth() > container.innerWidth()){
				container.find('.table-arrows').removeClass('hidden');
			}
			else {
				container.find('.table-arrows').addClass('hidden');
			}
			updateVisibleColumns(container);
		})

	}
	
	function scrollTableInit(){
		$('.table-left-arrow').click(function() {
			
			var $container = $(this).closest('.scrollable-table-container').find('.scrollable-table-wrapper');
			var $scrollableTable = $container.find('.scrollable-table');
			var columnWidth = $scrollableTable.find('td').outerWidth();
			
			$container.animate({
				scrollLeft: '-=' + columnWidth
			}, 100);
			setTimeout(function() {
				checkScrollEnd($scrollableTable.find('table'), $container);
			}, 110)
		});
		

		$('.table-right-arrow').click(function() {
			var $container = $(this).closest('.scrollable-table-container').find('.scrollable-table-wrapper');
			var $scrollableTable = $container.find('.scrollable-table');
			var columnWidth = $scrollableTable.find('td').outerWidth();
			
			$container.animate({
				scrollLeft: '+=' + columnWidth
			}, 100);
			setTimeout(function() {
				checkScrollEnd($scrollableTable.find('table'), $container);
			}, 110)
		});
	}

	function checkScrollEnd($scrollableContent, $container) {
		var maxScrollLeft = $scrollableContent.width() - $container.width();
		var wrapper = $container.closest('.scrollable-table-container');
		if ($container.scrollLeft() >= maxScrollLeft) {
			wrapper.addClass('scrolledRight').removeClass('scrolledLeft');
		} else if ($container.scrollLeft() <= 0) {
			wrapper.addClass('scrolledLeft').removeClass('scrolledRight');
		} else {
			wrapper.removeClass('scrolledRight scrolledLeft');
		}
		updateVisibleColumns($container);

	}
	
	function updateVisibleColumns($container) {
		var scrollLeft = $container.scrollLeft();
		var containerWidth = $container.width();

		$($container).find('td,th').each(function() {
			var $th = $(this);
			var thOffset = $th.position().left;
			var thWidth = $th.outerWidth();
			if ((thOffset >= scrollLeft) && ((thOffset + thWidth - 10) <= (scrollLeft + containerWidth)) && $th.text()) {
				$th.addClass('active');
			} else {
				$th.removeClass('active');
			}
		});
	}

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

	const handleResizeThrottled = throttle(showHideArrows, 100);

	window.addEventListener('resize', handleResizeThrottled);

	$('.single_post_body__content__inner').on('click', 'a', function(e) {
		var targetID = $(this).attr('href');

		if(targetID.startsWith("#")) {
			e.preventDefault()
			var targetElement = $(targetID);
			var headerHeight = $('.header').outerHeight(true);
			var adminBarHeight = $('#wpadminbar').length ? $('#wpadminbar').outerHeight(true) : 0

			if (targetElement.length) {
				$('html, body').animate({
					scrollTop: targetElement.offset().top - headerHeight - adminBarHeight - 15
				}, 300);
			}
		}
	})
});
