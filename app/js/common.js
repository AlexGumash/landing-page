$(function() {
	var owl = $('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 200,
		autoplayHoverPause: true,
		responsive:{
				0:{
						items:1
				},
				600:{
						items:1
				},
				1000:{
						items:1
				}
		}
	})


	$(".slider__arrow--prev").click(function () {
		owl.trigger('prev.owl.carousel');
	});

	$(".slider__arrow--next").click(function () {
		owl.trigger('next.owl.carousel');
	});

	$('.mobile-menu-icon').on('click', function() {
		$(this).toggleClass('mobile-menu-icon--active');
		$('.menu').toggleClass('menu--active');
		$('.menu--active').css('height', 'calc('+document.body.offsetHeight +  'px - 20vh )');
	});

});
