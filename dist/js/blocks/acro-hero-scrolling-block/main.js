(function(){
	if(typeof gsap == 'undefined' || !$('.acrobits_hero_scrolling').length) return;
	if(window.innerWidth >= 768){
		let xPercent = -60;

		let imageScroll = -(760 - (window.innerWidth - 1400) / 2);

		if(window.innerWidth < 1300) {
			imageScroll = -(760 + (1350 - window.innerWidth));
		}
		if(imageScroll > 0) {
			imageScroll *= -1;
		}
		gsap.registerPlugin(ScrollTrigger);

		let sections = gsap.utils.toArray(".scrolled-block");
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".acrobits_hero_scrolling",
				pin: true,
				scrub: 0.1,
				//snap: directionalSnap(1 / (sections.length - 1)),
				end: "+=1000"
			}
		});
		gsap.utils.toArray(".scrolled-block").forEach(layer => {
			// let value = layer.dataset.scroll === '100' ? -100 : xPercent;
			//
			// tl.to(layer, {xPercent: value, ease: "none"}, 0)

			let value = layer.dataset.scroll === '100' ? -760 : imageScroll;

			tl.to(layer, {x: value, ease: "none"}, 0)
		});
	}

})();