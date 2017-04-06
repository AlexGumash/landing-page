$(function() {
	$('.owl-carousel').owlCarousel({
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

	owl = $('.owl-carousel').owlCarousel();


	$(".prev").click(function () {
			owl.trigger('prev.owl.carousel');
	});

	$(".next").click(function () {
			owl.trigger('next.owl.carousel');
	});

});
