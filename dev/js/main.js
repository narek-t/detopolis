$(document).ready(function() {
	$('.products__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
	});
	$('.banners__slider').slick({
		arrows: false,
		dots: true,
	});
});