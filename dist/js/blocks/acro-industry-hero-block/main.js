(function($){
	$(document).ready(function(){
		
		// let scrolling = false
		// $('.industry-chapters .chapter').on('click', function(){
		// 	$('.industry-chapters .chapter').removeClass('current');
		// 	const index = $(this).data('block');
		// 	let element = $(`.industry-content-wrapper > div:nth-child(${index + 1})`);
		// 	scrollToSegment(element);
		// 	$(this).addClass('current');
		// 	// console.log(element)
		// })
		// const scrollToSegment = (el) => {
		//
		// 	if (!el.length) {
		// 		return null
		// 	}
		// 	scrolling = true
		// 	$('html, body').animate({
		// 		scrollTop: el.offset().top - $('body > .header').outerHeight()
		// 	}, 1000, 'swing', () => {
		// 		scrolling = false
		// 	});
		// }
		//
		// const headingsObserver = new IntersectionObserver((el) => {
		// 	console.log(el)
		// 	let index = el.target.index();
		// 	$('.industry-chapters .chapter').removeClass('current')
		// 	$(`[data-block=${index}]`).addClass('current');
		// }, {
		// 	rootMargin: "-30px 0% -77%",
		// 	threshold: 1
		// });
		//
		// $('h1, h2').each(function () {
		// 	// console.log(el.index(), index)
		// 	headingsObserver.observe(this)
		// })
	})
})(jQuery)