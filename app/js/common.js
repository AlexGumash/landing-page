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

	$('.down-part-list-item').on('mouseenter', function() {
		var target = event.target;
    while (target !== this) {
        target = target.parentNode;
      }

    for (var i = 0; i < target.children.length; i++) {
      var child = target.children[i];

      if (child.classList.contains('image')) {
        child.classList.add('image--active')
        child.classList.remove('image--disactive')
        child.children[0].classList.add('sub-image--active')
        child.children[0].classList.remove('sub-image--disactive')
      } else if (child.classList.contains('text-head')) {
        child.classList.add('text-head--active')
      }
    }

	});

	$('.down-part-list-item').on('mouseleave', function() {
    var target = event.target;
    while (target !== this) {
        target = target.parentNode;
      }

    for (var i = 0; i < target.children.length; i++) {
      var child = target.children[i];

      if (child.classList.contains('image')) {
        child.classList.remove('image--active')
        child.classList.add('image--disactive')
        child.children[0].classList.remove('sub-image--active')
        child.children[0].classList.add('sub-image--disactive')
      } else if (child.classList.contains('text-head')) {
        child.classList.remove('text-head--active')
      }
    }
	});

});
