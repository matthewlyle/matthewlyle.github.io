$(function () {

	$('.js-portfolio-slider').slick({
		dots: true,
		adaptiveHeight: true,
		lazyLoad: 'ondemand',
		slidesToShow: 1
	});

	$('.js-intrafinity-slider').slick({
		dots: true,
		adaptiveHeight: true
	});

	$('.dreampress-slider').slick({
		dots: true,
		arrows: false
	});

	$('.js-responsive-menu').hide();
	$('.js-responsive-menu-trigger').click(function(){
		$('.js-responsive-menu').slideToggle();
	})

	$('[data-remodal-id=menu] a').click(function(){
		$('[data-remodal-id=menu]').remodal().close();
	})
});
