/*global Sly */
jQuery(function ($) {
	'use strict';

	// Detect IE.
	// Feature detection of "transform-style: preserve-3d" doesn't work, so this
	// is the only way how to fall back to a 2D front page example in IE that
	// doesn't have a full support of 3D transforms across the board.
	document.getElementsByTagName('html')[0].className += ' ' +
		(~window.navigator.userAgent.indexOf('MSIE') ? 'ie' : 'no-ie');

	// ==========================================================================
	//   Header example
	// ==========================================================================
	var $example = $('#example');
	var $frame = $example.find('.frame');
	 //window.frr = $frame;

// var $example2 = $('#example2');
// 	var $frame2 = $example.find('.frame2');
	// window.frr = $frame2;
var sly = new Sly($frame, {
			horizontal: 1,
			itemNav: 'forceCentered',
			activateMiddle: 1,
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 10,
			scrollBar: $example.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $example.find('.pages'),
			activatePageOn: 'click',
			speed: 200,
			moveBy: 600,
			elasticBounds: 1,
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

		}).init();
// var sly2 = new Sly($frame2, {
// 			horizontal: 1,
// 			itemNav: 'forceCentered',
// 			activateMiddle: 1,
// 			smart: 1,
// 			activateOn: 'click',
// 			mouseDragging: 1,
// 			touchDragging: 1,
// 			releaseSwing: 1,
// 			startAt: 10,
// 			scrollBar: $example2.find('.scrollbar2'),
// 			scrollBy: 1,
// 			pagesBar: $example2.find('.pages'),
// 			activatePageOn: 'click',
// 			speed: 200,
// 			moveBy: 600,
// 			elasticBounds: 1,
// 			dragHandle: 1,
// 			dynamicHandle: 1,
// 			clickBar: 1,

// 		}).init();
		
	// function scrollSly(item, frame) {
		
	// }

	// scrollSly($example, $frame);
	// scrollSly($example2, $frame2);
	// // Method calling buttons
	// $example.on('click', 'button[data-action]', function () {
	// 	var action = $(this).data('action');

	// 	switch (action) {
	// 		case 'add':
	// 			sly.add('<li>' + sly.items.length + '</li>');
	// 			break;
	// 		case 'remove':
	// 			sly.remove(-1);
	// 			break;
	// 		default:
	// 			sly[action]();
	// 	}
	// });
});