const counter = () => {
	const nums = document.querySelectorAll('.number');

	function startCount(el) {
		const {
				  goal,
				  speed,
				  step,
			  }             = el.dataset;
		const decimalPlaces = (goal.split('.')[1] || []).length;
		const increment     = step ? parseFloat(step) : 1 / 10 ** decimalPlaces;
		let currentVal      = parseFloat(el.textContent);
		const count         = setInterval(() => {
			currentVal += increment;
			if (currentVal >= parseFloat(goal)) {
				el.textContent = parseFloat(goal).toFixed(decimalPlaces);
				clearInterval(count);
			} else {
				el.textContent = currentVal.toFixed(decimalPlaces);
			}
		}, speed || 0);
	}

	nums.forEach((num) => {
		startCount(num);
	});
};

export default counter;
