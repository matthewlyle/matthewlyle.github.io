var py = {

	galleries: function(){
		var $homepage_gallery = $('.js-portfolio-slider'),
		$intrafinity_gallery = $('.js-intrafinity-slider');

		$homepage_gallery.slick({dots: true, adaptiveHeight: true, lazyLoad: 'ondemand', slidesToShow: 1});
		$intrafinity_gallery.slick({dots: true, adaptiveHeight: true});
	},

	menu: function(){
		var $menu = $('[data-remodal-id=menu]');

		$menu.find('a').click(function(){
			$menu.remodal().close();
		})
	}
}

$(function () {
	py.galleries();
	py.menu();
});
