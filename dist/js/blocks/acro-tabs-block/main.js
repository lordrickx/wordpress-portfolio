(function($){
	$(document).ready(function(){
		$('.acro-tabs__content__tabs__item').on('click', function(){
			const parent = $(this).closest('.acro-tabs-block');
			const index = $(this).data('item');
			parent.find('.acro-tabs__content__tabs__item').removeClass('active');
			parent.find('.list-item').removeClass('active');
			$(this).addClass('active');
			parent.find('.list-item[data-item="' + index + '"]').addClass('active');

			const tabsContainer = document.querySelector('.acro-tabs__content__tabs');
			const tabs = tabsContainer.getElementsByClassName('acro-tabs__content__tabs__item');

			for (let tab of tabs) {
				tab.addEventListener('click', function() {
					const tabWidth = this.offsetWidth;
					const containerWidth = tabsContainer.offsetWidth;
					const tabLeft = this.offsetLeft;
					const tabCenterPosition = tabLeft + (tabWidth / 2);
					const scrollToPosition = tabCenterPosition - (containerWidth / 2);

					if (this === tabs[tabs.length - 1]) {
						tabsContainer.scrollTo({
							left: tabsContainer.scrollWidth,
							behavior: 'smooth'
						});
					} else {
						tabsContainer.scrollTo({
							left: scrollToPosition,
							behavior: 'smooth'
						});
					}
				});
			}
		})

		function assignRowClasses() {
			if(window.innerWidth < 768 || !document.getElementsByClassName('acro-tabs__content__tabs').length){
				return;
			}
			const container = document.getElementsByClassName('acro-tabs__content__tabs')[0];
			const buttons = container.getElementsByClassName('acro-tabs__content__tabs__item');
			const containerWidth = container.clientWidth;

			for (let button of buttons) {
				button.classList.remove('first', 'last', 'row-1', 'row-2');
			}

			if (buttons.length === 0) return;

			const buttonWidth = buttons[0].offsetWidth + parseInt(window.getComputedStyle(buttons[0]).marginRight) * 2;
			const buttonsPerRow = Math.floor(containerWidth / buttonWidth);

			let rowIndex = 0;
			for (let i = 0; i < buttons.length; i++) {
				if (i % buttonsPerRow === 0) {
					rowIndex++;
					buttons[i].classList.add('first');
				}
				if (i % buttonsPerRow === buttonsPerRow - 1 || i === buttons.length - 1) {
					buttons[i].classList.add('last');
				}
				buttons[i].classList.add(`row-${rowIndex}`);
			}
		}

		if(document.getElementsByClassName('acro-tabs-block_2').length){
			window.addEventListener('load', () => assignRowClasses());
			window.addEventListener('resize', () => assignRowClasses());
		}
	})
})(jQuery);