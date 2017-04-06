$(function() {
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dotsData: true,
		dotsContainer: '.owl-dots',
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

	$('.owl-dot').click(function () {
  		owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});
});
