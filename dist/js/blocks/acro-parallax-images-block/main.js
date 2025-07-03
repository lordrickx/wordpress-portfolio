(function(){
	if(typeof gsap == 'undefined') return;
	if(window.innerWidth < 768 || !$('.acrobits_parallax-images').length) return;
	const scrollTrigger = {
		trigger: ".acrobits_parallax-images",
		start: "top top",
		end: "+=700",
		scrub: true,
		// invalidateOnRefresh: true,
		// onUpdate: (self) => {
		// 	console.log("🔹 updating: " + self.scroll());
		// },
		// onRefresh: (self) => {
		// 	console.groupCollapsed("🟠 refresh trace");
		// 	console.trace("scroll trigger refresh: " + self.scroll());
		// }
	}
	const tl = gsap.timeline({
		scrollTrigger: scrollTrigger
	});
	function setAnimation(){

		gsap.utils.toArray(".parallax").forEach(layer => {
			const depth = layer.dataset.depth;
			if(depth === '-4'){
				tl.to(layer, {yPercent: -8, ease: "none", xPercent: 0}, 0)
			}
			else if(depth === '10'){
				tl.to(layer, {yPercent: 1, ease: "none", xPercent: 0}, 0)
			}
			else if(depth === '13'){
				tl.to(layer, {yPercent: 8, ease: "none", xPercent: 0}, 0)
			}
			else {
				// const movement = -(layer.offsetHeight * depth)
				const movement = (i, target) => -ScrollTrigger.maxScroll(window) * (depth / 7);
				tl.to(layer, {y: movement, ease: "none"}, 0)
			}
		});

	}
	setAnimation();
	window.onresize = () => {
		tl.scrollTrigger.refresh();
	}


})();

