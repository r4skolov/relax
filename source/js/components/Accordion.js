const accordion = () => {
	const accordions    = document.querySelectorAll('.accordion');
	let activeAccordion = null;

	accordions.forEach((el) => {
		el.addEventListener('click', (e) => {
			const self    = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			if (self === activeAccordion) {
				self.classList.remove('open');
				control.setAttribute('aria-expanded', 'false');
				content.setAttribute('aria-hidden', 'true');
				activeAccordion = null;

				self.querySelectorAll('.services__list').forEach((element) => element.classList.remove('active'));
				self.querySelectorAll('.services__about').forEach((element) => element.classList.remove('active'));
			} else {
				if (activeAccordion) {
					const activeControl = activeAccordion.querySelector('.accordion__control');
					const activeContent = activeAccordion.querySelector('.accordion__content');
					activeAccordion.classList.remove('open');
					activeControl.setAttribute('aria-expanded', 'false');
					activeContent.setAttribute('aria-hidden', 'true');

					activeAccordion.querySelectorAll('.services__list').forEach((element) => element.classList.remove('active'));
					activeAccordion.querySelectorAll('.services__about').forEach((element) => element.classList.remove('active'));
				}

				self.classList.add('open');
				control.setAttribute('aria-expanded', 'true');
				content.setAttribute('aria-hidden', 'false');

				activeAccordion = self;

				setTimeout(() => {
					self.querySelectorAll('.services__list').forEach((element) => element.classList.add('active'));
					self.querySelectorAll('.services__about').forEach((element) => element.classList.add('active'));
				}, 400);

				el.querySelector('.accordion__content').addEventListener('click', (e) => {
					e.stopPropagation();
				});
			}
		});
	});
};

export default accordion;
