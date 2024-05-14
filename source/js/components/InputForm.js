const inputForm = () => {
	const inputButtons = document.querySelectorAll('[data-btn="button"]');
	const inputs       = document.querySelectorAll('.form__input--phone');

	inputs.forEach((input) => {
		const prefixNumber = (str) => {
			if (str === '7') {
				return '7 (';
			}

			if (str === '9') {
				return '7 (9';
			}
			return '7 (';
		};

		input.addEventListener('input', (e) => {
			const value        = input.value.replace(/\D+/g, '');
			const numberLength = 11;

			let result;
			if (input.value.includes('+8') || input.value[0] === '8') {
				result = '';
			} else {
				result = '+';
			}

			for (let i = 0; i < value.length && i < numberLength; i++) {
				switch (i) {
				case 0:
					result += prefixNumber(value[i]);
					continue;
				case 4:
					result += ') ';
					break;
				case 7:
					result += '-';
					break;
				case 9:
					result += '-';
					break;
				default:
					break;
				}
				result += value[i];
			}
			input.value = result;
		});
	});

	inputButtons.forEach((inputButton) => {
		inputs.forEach((item) => {
			item.addEventListener('input', () => {
				if (item.value.length === 4) {
					inputButton.classList.add('disabled');
				} else if (item.value.length > 2) {
					inputButton.classList.remove('disabled');
				}
			});
		});
	});
};
export default inputForm;
