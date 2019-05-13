jQuery(function ($) {

	// Check mobile
	function is_mobile() { return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) }

	if (is_mobile()) {
		if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) $('meta[name="viewport"]').prop('content', 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no');
		$('html').addClass('mobile');
	}

	// section 1 side circles carousel
	var circlesCarousel = $('#circles-carousel');
	circlesCarousel.fCarousel({
		'centerItem': 0,
		'orientation': 'vertical',
		'visibleItems': 2,
		'mousewheel': true,
		'distance': 60,
		'autoplay': 100000,
		'perspective': 0,
		'responsive': {
			0: { 'separation': 100, 'mousewheel': false },
			768: { 'mousewheel': true, 'separation': 80 },
			1024: { 'separation': 100 }
		},
		'onChange': function (carousel) {



			// console.log(carousel.data('centerItem').index());
			// var i =carousel.data('centerItem').index();
			// var b = i +2;
			// console.log(b);
			// console.log(carousel.centerClass);
			//carousel.trigger('jumpTo', carousel.data('nextItem').index());
			// carousel[b] = carousel.data('centerItem');
			// console.log(carousel.data('centerItem'));
			//console.log(carousel.data('centerItem').index());
			//console.log(carousel.data('nextItem').index());
			//carousel.data('centerItem').index() = carousel.data('nextItem').index();

			//carousel.data('centerItem') = carousel.data('nextItem');

			// console.log($('#circles-carousel .carousel_center'));
			// console.log(carousel.data('centerItem'));
			// console.log(carousel.data('centerItem').prev());
			// console.log(carousel.data('centerItem').next());




			var centerItemCir = carousel.data('centerItem');
			var nextItemCir, secondNext, prevItemCir, secondPrev;

			if (centerItemCir.index() === carousel.data('items') - 1) {
				//console.log('center is last ');
				prevItemCir = carousel.data('centerItem').prev();
				secondPrev = carousel.data('centerItem').prev().prev();
				nextItemCir = $('#circles-carousel .item:nth-child(1)');
				secondNext = $('#circles-carousel .item:nth-child(2)');
			}
			else if (centerItemCir.index() === 0) {
				//console.log('center is first ');
				prevItemCir = $('#circles-carousel .item:last-child');
				secondPrev = $('#circles-carousel .item:last-child').prev();
				nextItemCir = carousel.data('centerItem').next();
				secondNext = carousel.data('centerItem').next().next();
			}
			else if (centerItemCir.index() === 1) {
				//console.log('center is second ');
				prevItemCir = carousel.data('centerItem').prev();
				secondPrev = $('#circles-carousel .item:last-child');
				nextItemCir = carousel.data('centerItem').next();
				secondNext = carousel.data('centerItem').next().next();
			}
			else if (centerItemCir.index() === carousel.data('items') - 2) {
				//console.log('center is before last ');
				prevItemCir = carousel.data('centerItem').prev();
				secondPrev = carousel.data('centerItem').prev().prev();
				nextItemCir = carousel.data('centerItem').next();
				secondNext = $('#circles-carousel .item:nth-child(1)');
			}
			else if (centerItemCir.index() === Number((carousel.data('items') / 2).toFixed(0)) - 1) {
				//console.log('center is center ');
				prevItemCir = carousel.data('centerItem').prev();
				secondPrev = carousel.data('centerItem').prev().prev();
				nextItemCir = carousel.data('centerItem').next();
				secondNext = carousel.data('centerItem').next().next();
			}

			centerItemCir.css({ 'right': '40%' });
			prevItemCir.css({ 'right': '25%' });
			secondPrev.css({ 'right': '-15%' });
			nextItemCir.css({ 'right': '25%' });
			secondNext.css({ 'right': '-15%' });




			// console.log(prevItemCir)
			// console.log(secondPrev)
			// console.log(nextItemCir)
			// console.log(secondNext)


			// 		var centerItemCir = carousel.data('centerItem');
			// 		centerItemCir.css({ 'margin-left': '45%' });
			// 		if (centerItemCir.index() === carousel.data('items') - 1) {
			// 			//console.log('center is last ');
			// 			centerItemCir.prev().css({ 'margin-left': '30%' });
			// 			centerItemCir.prev().prev().css({ 'margin-left': '0' });
			// 			centerItemCir.prev().prev().prev().css({ 'margin-left': '0' });
			// 			centerItemCir.prev().prev().prev().prev().css({ 'margin-left': '30%' });
			// 		}
			// 		else if (centerItemCir.index() === 0) {
			// 			//console.log('center is first ');
			// 			centerItemCir.next().css({ 'margin-left': '30%' });
			// 			centerItemCir.next().next().css({ 'margin-left': '0' });
			// 			centerItemCir.next().next().next().css({ 'margin-left': '0' });
			// 			centerItemCir.next().next().next().next().css({ 'margin-left': '30%' });
			// 		}
			// 		else if (centerItemCir.index() === 1) {
			// 			//console.log('center is second ');
			// 			centerItemCir.prev().css({ 'margin-left': '30%' });
			// 			centerItemCir.next().css({ 'margin-left': '30%' });
			// 			centerItemCir.next().next().css({ 'margin-left': '0' });
			// 			centerItemCir.next().next().next().css({ 'margin-left': '0' });
			// 		}
			// 		else if (centerItemCir.index() === carousel.data('items') - 2) {
			// 			//console.log('center is before last ');
			// 			centerItemCir.next().css({ 'margin-left': '30%' });
			// 			centerItemCir.prev().css({ 'margin-left': '30%' });
			// 			centerItemCir.prev().prev().css({ 'margin-left': '0' });
			// 			centerItemCir.prev().prev().prev().css({ 'margin-left': '0' });
			// 		}
			// 		else if (centerItemCir.index() === Number((carousel.data('items') / 2).toFixed(0)) - 1) {
			// 			//console.log('center is center ');
			// 			centerItemCir.prev().css({ 'margin-left': '30%' });
			// 			centerItemCir.prev().prev().css({ 'margin-left': '0' });
			// 			centerItemCir.next().css({ 'margin-left': '30%' });
			// 			centerItemCir.next().next().css({ 'margin-left': '0' });
			// 		}
		}
	});

	// if odd or even
	var circlesCarouseItemslLength = $('#circles-carousel .item').length;
	var centerItem;
	if (circlesCarouseItemslLength % 2 == 0) {
		centerItem = $('#circles-carousel .item').eq(((circlesCarouseItemslLength + 2) / 2) - 1);
	}
	else {
		centerItem = $('#circles-carousel .item').eq(((circlesCarouseItemslLength + 1) / 2) - 1);
	}
	centerItem.css({ 'right': '40%' });
	centerItem.prev().css({ 'right': '25%' });
	centerItem.prev().prev().css({ 'right': '-15%' });
	centerItem.next().css({ 'right': '25%' });
	centerItem.next().next().css({ 'right': '-15%' });






	if (window.matchMedia("(max-height: 700px)").matches && window.matchMedia("(max-width: 420px)").matches) {
		$('#circles-carousel').css('perspective', '340px');
	} else if(window.matchMedia('(max-height: 700px)').matches && window.matchMedia('(min-height: 600px)').matches){ 
		$('#circles-carousel').css({ 'perspective': '200px', 'width': '260px' });
	}else if (window.matchMedia("(max-height: 900px)").matches && window.matchMedia("(max-width: 1300px)").matches && window.matchMedia("(min-width: 1200px)").matches) {
		$('#circles-carousel').css({ 'perspective': '320px', 'width': '282px' });
	} 
	

	// Example 3
	var carousel1 = $('#example-3');
	carousel1.fCarousel({
		'centerItem': 2,
		'separation': 250,
		'orientation': 'vertical',
		'mousewheel': true,
		'distance': 100,
		'autoplay': 5000,
		'perspective': 10,
		'responsive': {
			0: { 'separation': 100, 'mousewheel': false },
			768: { 'mousewheel': true, 'separation': 80 },
			1024: { 'separation': 50 }
		},
		'onChange': function (carousel) {
			carousel.find('.dot').eq(carousel.data('centerItem').index()).addClass('active').siblings().removeClass('active');
		},
		'arrows': true,
		'arrowsClass': ['f_arrow', '', ''],
	});

	// dots
	carousel1.append('<div class="control"></div>');
	var controls = $('.control');
	var prev = $('.f_arrow.prev').detach();
	var next = $('.f_arrow.next').detach();

	controls.append('<div class="dots"></div>');
	for (var i = 0; i < carousel1.data('items'); i++) {
		controls.children('.dots').append('<a href="#" class="dot" role="button" tabindex="-1"></a>');
	}
	//controls.find('.dot').eq(carousel1.data('centerItem').index()).addClass('active');

	// click on dots
	controls.find('.dot').on('click', function () {
		if (!$(this).hasClass('active')) {
			var index = $(this).index() + 1;
			carousel1.trigger('jumpTo', index);
		}
		return false;
	});
	$('.control').prepend(prev);
	$('.control').append(next);

	$('.control').nextAll('a').remove();


	$(".toflip").click(function () {
		$(this).parents(".item").find(".card").toggleClass("is-flipped");
	});
	$(".counters-contnr .counters").hide();
	$('.counters-contnr .counters:first-child').show();




	// services carousel
	$('#top_carousel').fCarousel({
		'centerItem': 1,
		'visibleItems': 3,
		'speed': 500,
		'separation': 250,
		'mousewheel': true,
		'distance': 350,
		'perspective': 10,
		'autoplay': 0,
		//'opacity': 0.9,
		'sideItemsAlign': 10,
		'responsive': {
			0: { 'separation': 60 },
			480: { 'separation': 180 },
			768: { 'separation': 450 }
		}, 'onChange': function (carousel) {

			//$('.counters').slideToggle(3000);
			//var index = $(".item.carousel_center").index() - 1;
			var index  = carousel.data('centerItem').index()
			$(".counters-contnr .counters").hide();
			$(".counters-contnr .counters").eq(index).show();
			$(".counters-contnr .counters .counter").text(0)
			$('.counter').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({ countNum: $this.text() }).animate({
					countNum: countTo
				},
					{
						duration: 8000,
						easing: 'linear',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
							//alert('finished');
						}
					});
			});
		}
	});


});