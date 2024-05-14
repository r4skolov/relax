import { gsap }          from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bounce }        from 'gsap/gsap-core';

const tl = gsap.timeline();

function gsaP(el, config) {
	if (!el) return false;
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(Bounce);
	gsap.config({
		nullTargetWarn : false,
	});
	return gsap.from(el, config);
}

const anim = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const hero = gsap.utils.toArray('[data-anim="hero"]');
		gsaP(hero, {
			scrollTrigger : {
				trigger : '.hero__wrapper',
				start   : 'top center',
			},
			stagger         : 0.5,
			duration        : 0.5,
			x               : '100%',
			transformOrigin : 'left',
			ease            : '',
			delay           : 0.2,
			opacity         : 0,
		});

		const guarantee = gsap.utils.toArray('[data-anim="guarantee"]');
		gsaP(guarantee, {
			scrollTrigger : {
				trigger : '.guarantee',
				start   : 'top +400px',
				end     : '+=200px',
				markers : false,
			},
			y        : '100%',
			opacity  : 0,
			delay    : 0,
			stagger  : 0.5,
			duration : 1,
			ease     : 'power1.inOut',
		});
		gsap.to(guarantee, {
			opacity : 1,
		});

		const prof = gsap.utils.toArray('[data-anim="professional"]');
		gsaP(prof, {
			scrollTrigger : {
				trigger : '.professional',
				start   : 'top center',
				markers : false,
			},
			stagger         : 0.5,
			duration        : 0.5,
			x               : '100%',
			transformOrigin : 'left',
			delay           : 0.2,
			opacity         : 0,
		});

		const order = gsap.utils.toArray('[data-anim="order"]');
		gsaP(order, {
			scrollTrigger : {
				trigger : '.make-order',
				start   : 'top center',
				markers : false,
			},
			stagger         : 0.5,
			duration        : 0.5,
			x               : '100%',
			transformOrigin : 'left',
			ease            : '',
			delay           : 0.2,
			opacity         : 0,
		});
		const pin = gsap.utils.toArray('[data-anim="pin"]');
		gsaP(pin, {
			scrollTrigger : {
				trigger : '.map',
				start   : 'top center',
				markers : false,
			},
			stagger  : 0.5,
			duration : 1,
			opacity  : 0,
			delay    : 0.5,
		});

		gsap.to('.special__top', {
			scrollTrigger : {
				trigger : '.special',
				start   : 'top+=100px center',
				end     : 'bottom-=100px center',
				scrub   : true,
				markers : false,
			},
			x    : '-512px',
			ease : 'none',
		});
		gsap.to('.special__bottom', {
			scrollTrigger : {
				trigger : '.special',
				start   : 'top+=100px center',
				end     : 'bottom-=100px center',
				scrub   : true,
				markers : false,
			},
			x    : '562px',
			ease : 'none',
		});
	});
};

export default anim;
