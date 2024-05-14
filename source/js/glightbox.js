import GLightbox from 'glightbox';

const lightbox = GLightbox({
	loop        : false,
	openEffect  : 'zoom',
	closeEffect : 'fade',
	selector    : '.glightbox',
	cssEfects   : {
		fade : {
			in  : 'fadeIn',
			out : 'fadeOut',
		},
		zoom : {
			in  : 'zoomIn',
			out : 'zoomOut',
		},
	},
});
