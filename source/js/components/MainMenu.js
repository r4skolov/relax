import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

/**
 * Represents the main menu of the website.
 */

export default class MainMenu {
	#openStatus = false;

	/**
	 * Initializes the main menu.
	 *
	 * @param {Object} options - The options for the main menu.
	 * @param {string} options.container - The selector for the main menu container.
	 * @param {string} options.trigger - The selector for the main menu trigger.
	 * @param {string} options.menu - The selector for the main menu.
	 * @param {string} options.openClass - The CSS class for when the main menu is open.
	 * @param {string} options.animationClass - The CSS class for when the main menu is animating.
	 * @param {string} options.bodyClass - The CSS class for when the body is overflowing.
	 * @param {function} options.onOpen - The callback for when the main menu is opened.
	 * @param {function} options.onClose - The callback for when the main menu is closed.
	 */

	constructor({
		container = '[data-main-menu="wrapper"]',
		trigger = '[data-main-menu="trigger"]',
		menu = '[data-main-menu="menu"]',
		openClass = 'is-open',
		animationClass = 'is-animation',
		bodyClass = 'is-overflow',
		onOpen = () => {
		},
		onClose = () => {
		},
	} = {}) {
		this.trigger   = document.querySelector(trigger);
		this.container = document.querySelector(container);
		this.menu      = document.querySelector(menu);

		this.options = {
			openClass,
			animationClass,
			bodyClass,
			onOpen,
			onClose,
		};

		this._init();
	}

	/**
	* Get the open status of a business
	* @returns {boolean} - Whether the business is open or not
	*/
	get openStatus() {
		return this.#openStatus;
	}

	/**
	 * Initializes the event listener for the trigger element.
	 * If there is no trigger or container, do nothing.
	 * Bind the click event to the _click method.
	 * @returns {void}
	 */
	_init() {
		if (this.trigger && this.container) {
			this.trigger.addEventListener('click', this._click.bind(this));
		}
	}

	/**
	 * Click event handler that prevents default behavior.
	 *
	 * @param {Event} e - The event object.
	 * @return {boolean} Returns false to prevent default behavior.
	 */
	_click(e) {
		e.preventDefault();
		if (!this.trigger.classList.contains(this.options.openClass)) {
			if (!this.#openStatus) this._open();
		} else {
			this._close();
		}
		return false;
	}

	/**
	 * Sets open status to true and applies open-related classes and animations to the menu and body.
	 */
	_open() {
		// Set open status to true
		this.#openStatus = true;

		// Destructure options object
		const {
				  onOpen, // Callback function on open
				  openClass, // Class to apply to trigger on open
				  bodyClass, // Class to apply to body on open
				  animationClass, // Class to apply to menu and container for animation on open
			  } = this.options;

		// Call onOpen callback function if defined
		if (onOpen) {
			onOpen();
		}

		// Add openClass to trigger classList and bodyClass to document body classList
		const { classList } = this.trigger;
		classList.add(openClass);
		document.body.classList.add(bodyClass);

		// Add openClass and animationClass to container classList and disable body scroll
		const {
				  container,
				  menu,
			  } = this;
		container.classList.add(openClass, animationClass);
		disableBodyScroll(container);

		// Add animationClass to menu after 100ms delay
		setTimeout(() => menu.classList.add(animationClass), 100);
	}

	/**
	 * Closes the menu and resets the state
	 */
	_close() {
		const self = this;
		// Destructure properties from 'this'
		const {
				  menu,
				  container,
				  trigger,
				  options:{
					  animationClass,
					  openClass,
					  bodyClass,
					  onClose,
				  },
			  }    = self;

		// Remove animation and open classes from menu and container
		menu.classList.remove(animationClass);
		container.classList.remove(animationClass);

		// Remove open class from trigger
		trigger.classList.remove(openClass);

		// Listen for animation end event on container
		container.addEventListener('animationend', function handler() {
			// Remove body class and enable scrolling on container
			document.body.classList.remove(bodyClass);
			enableBodyScroll(container);

			// Remove open class from container and remove event listener
			container.classList.remove(openClass);
			container.removeEventListener('animationend', handler, false);

			// Call onClose callback if provided
			if (onClose) onClose();

			// Reset openStatus state to false
			self.#openStatus = false;
		}, false);
	}

	/**
	 * Closes the main menu.
	 */
	closeMainMenu() {
		this._close();
	}
}
