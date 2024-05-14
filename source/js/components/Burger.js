const burger = () => {
	const burgerEl      = document.querySelector('[data-burger]');
	const menu          = document.querySelector('[data-menu]');
	const targetElement = document.querySelector('body');

	function disableScroll() {
		const pagePosition = window.scrollY;
		targetElement.classList.add('scroll');
		document.body.dataset.position = pagePosition;
	}

	function enableScroll() {
		targetElement.classList.remove('scroll');
		document.body.removeAttribute('data-position');
	}

	burgerEl.addEventListener('click', () => {
		burgerEl.classList.toggle('burger--active');
		menu.classList.toggle('active');

		if (menu.classList.contains('active')) {
			burgerEl.setAttribute('aria-expanded', 'true');
			burgerEl.setAttribute('aria-label', 'Сlose menu');
			disableScroll();
		} else {
			burgerEl.setAttribute('aria-expanded', 'false');
			burgerEl.setAttribute('aria-label', 'Open menu');
			enableScroll();
		}
	});
};

export default burger;
