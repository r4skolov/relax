import inputForm  from './components/InputForm';
import share      from './components/Share';
import accordion  from './components/Accordion';
import DropPanel  from './components/DropPanel';
import MainMenu   from './components/MainMenu';
import MicroModal from './components/MicroModal';
import burger     from './components/Burger';
import Tabs       from './components/Tabs';
import counter    from './components/Counter';
import anim       from './components/Anim';

function modal() {
	const settings = {
		openTrigger         : 'data-modal-open',
		closeTrigger        : 'data-modal-close',
		openClass           : 'is-open',
		awaitOpenAnimation  : true,
		awaitCloseAnimation : true,
	};

	MicroModal.init(settings);
	const modalCloseLink = document.querySelector('.js-modal-close');
	if (modalCloseLink) {
		modalCloseLink.addEventListener('click', (e) => {
			e.preventDefault();
			const { id } = e.target.dataset;
			if (id) {
				MicroModal.close(id, settings);
			}

			document.querySelectorAll('.modal__content').forEach((item) => {
				if (item.classList.contains('active')) {
					item.classList.remove('active');
				} else {
					item.classList.add('active');
				}
			});
		});
	}

	document.querySelector('.b-btn--secondary').addEventListener('click', () => {
		document.querySelectorAll('.modal__content').forEach((item) => {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
			} else {
				item.classList.add('active');
			}
		});
	});
}

// Init
function init() {
	new DropPanel();
	burger();
	accordion();
	new Tabs();
	counter();
	anim();
	modal();
	share();
	inputForm();
}

(function () {
	init();
}());
