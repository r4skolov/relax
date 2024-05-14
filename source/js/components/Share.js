const share = () => {
	const shareBtn   = document.querySelector('.share__btn');
	const shareBlock = document.querySelector('.share__wrapper');

	if (shareBtn) {
		shareBtn.addEventListener('click', (event) => {
			event.stopPropagation();
			if (window.matchMedia('(max-width: 1080px)').matches) {
				if (navigator.share) {
					navigator.share({
						title : 'Поделиться этой страницей',
						url   : window.location.href,
					})
							 .then(() => console.log('Успешно поделились'))
							 .catch((error) => console.error('Ошибка при шаринге:', error));
				}
			} else {
				shareBlock.classList.toggle('active');
				shareBtn.classList.toggle('active');
			}
		});

		if (shareBlock) {
			document.querySelector('[data-copy]').addEventListener('click', (event) => {
				event.stopPropagation(); // Предотвращаем всплытие события
				navigator.clipboard.writeText(window.location.href)
						 .then(() => {
							 console.log('URL скопирован в буфер обмена');
						 })
						 .catch((error) => {
							 console.error('Ошибка при копировании URL в буфер обмена', error);
						 });
			});

			window.addEventListener('click', () => {
				shareBlock.classList.remove('active');
				shareBtn.classList.remove('active');
			});
		}
	}
};

export default share;
