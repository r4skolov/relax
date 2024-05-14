import Swiper, {
	Navigation, Pagination, Thumbs, FreeMode, Autoplay, Scrollbar, EffectFade,
} from 'swiper';

// Slider
function slider(el, config) {
	if (!el) return false;
	const slider = el.querySelector('.swiper');
	if (!slider) return false;
	const next       = el.querySelector('.swiper-button-next');
	const prev       = el.querySelector('.swiper-button-prev');
	const pagination = el.querySelector('.swiper-pagination');
	const settings   = {
		modules               : [Navigation, Pagination, Thumbs, FreeMode, Autoplay, Scrollbar],
		loop                  : false,
		slidesPerView         : 'auto',
		spaceBetween          : 0,
		preloadImages         : false,
		watchSlidesVisibility : true,
		watchOverflow         : true,
		threshold             : 10,
		observer              : true,
		navigation            : {
			nextEl : next,
			prevEl : prev,
		},
		pagination : {
			el             : pagination,
			type           : 'bullets',
			clickable      : true,
			dynamicBullets : false,
		},
	};

	if (config) {
		Object.assign(settings, config);
	}

	return new Swiper(slider, settings);
}

function sliderLegsBig(el) {
	if (!el) {
		return false;
	}
	const sliderLegs       = el.querySelector('.swiper--legsmain');
	const sliderNav        = el.querySelector('.swiper--nav');
	const sliderOptionsNav = {
		loop                : false,
		slidesPerView       : 'auto',
		freeMode            : true,
		watchSlidesProgress : true,
	};
	const swiper2          = new Swiper(sliderNav, sliderOptionsNav);

	const sliderOptions = {
		modules        : [Navigation, EffectFade, Thumbs],
		loop           : false,
		slidesPerView  : 'auto',
		effect         : 'fade',
		allowTouchMove : false,
		fadeEffect     : {
			crossFade : true,
		},
		thumbs : {
			swiper : swiper2,
		},
	};

	const swiper = new Swiper(sliderLegs, sliderOptions);

	return swiper;
}

const sliderLeg = document.querySelectorAll('[data-slider="legsBig-slider"]');
sliderLeg.forEach((item) => sliderLegsBig(item, {}));

const sliderHero = document.querySelectorAll('[data-slider="slider-hero"]');
sliderHero.forEach((item) => slider(item, {
	spaceBetween : 0,
	speed        : 1000,
	autoplay     : {
		delay : 4000,
	},
	loop          : false,
	slidesPerView : 'auto',
}));

const sliderReviews = document.querySelectorAll('[data-slider="slider-reviews"]');
sliderReviews.forEach((item) => slider(item, {
	spaceBetween        : 0,
	slidesPerView       : 'auto',
	watchSlidesProgress : true,
	scrollbar           : {
		el   : '.swiper-scrollbar',
		hide : false,
	},
}));

const sliderLegs = document.querySelectorAll('[data-slider="slider-legs"]');
sliderLegs.forEach((item) => slider(item, {
	spaceBetween  : 0,
	slidesPerView : 'auto',
	// watchSlidesProgress : true,
	navigation    : {
		nextEl : '.legs-slider-next',
		prevEl : '.legs-slider-prev',
	},
}));

const sliderReview = document.querySelectorAll('[data-slider="slider-review"]');
sliderReview.forEach((item) => slider(item, {
	spaceBetween        : 0,
	slidesPerView       : 'auto',
	watchSlidesProgress : true,
	scrollbar           : {
		el   : '.swiper-scrollbar',
		hide : true,
	},
}));

const sliderProduction = document.querySelectorAll('[data-slider="slider-production"]');
sliderProduction.forEach((item) => slider(item, {
	spaceBetween : 0,
	speed        : 1000,
	autoplay     : {
		delay : 4000,
	},
	loop          : false,
	slidesPerView : 'auto',
}));

const sliderProduct = document.querySelectorAll('[data-slider="product-slider"]');
sliderProduct.forEach((item) => slider(item, {
	loop          : false,
	slidesPerView : 'auto',
	pagination    : {
		el : '.swiper-pagination',
	},
	breakpoints : {
		1440 : {
			allowTouchMove : true,
		},
	},
}));

const sliderInterior = document.querySelectorAll('[data-slider="slider-interior"]');
sliderInterior.forEach((item) => slider(item, {
	spaceBetween  : 0,
	slidesPerView : 'auto',
	// watchSlidesProgress : true,
	navigation    : {
		nextEl : '.interior-slider-next',
		prevEl : '.interior-slider-prev',
	},
	scrollbar : {
		el   : '.swiper-scrollbar',
		hide : false,
	},
}));

const sliderModels = document.querySelectorAll('[data-slider="slider-models"]');
sliderModels.forEach((item) => slider(item, {
	spaceBetween  : 0,
	slidesPerView : 'auto',
	// watchSlidesProgress : true,
	navigation    : {
		nextEl : '.models-slider-next',
		prevEl : '.models-slider-prev',
	},
	scrollbar : {
		el   : '.swiper-scrollbar',
		hide : false,
	},
}));

function sliderLegsSecond(el) {
	if (!el) {
		return false;
	}
	const sliderLegsAbout = el.querySelector('.swiper--background');

	const sliderOptions = {
		modules        : [Navigation, EffectFade, Thumbs],
		loop           : false,
		slidesPerView  : 'auto',
		effect         : 'fade',
		allowTouchMove : false,
		fadeEffect     : {
			crossFade : true,
		},
	};

	const swiper = new Swiper(sliderLegsAbout, sliderOptions);

	const buttons = el.querySelectorAll('[data-slide]');

	buttons.forEach((button) => {
		button.addEventListener('click', function () {
			buttons.forEach((btn) => {
				btn.classList.remove('active');
			});

			this.classList.add('active');

			const slideIndex = parseInt(this.getAttribute('data-slide'));
			swiper.slideTo(slideIndex);
		});
	});

	return swiper;
}

const sliderLegsS = document.querySelectorAll('[data-slider="legsmini-slider"]');
sliderLegsS.forEach((item) => sliderLegsSecond(item, {}));
