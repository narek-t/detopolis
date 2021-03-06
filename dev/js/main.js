$(document).ready(function() {
	$('.products__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
	});
	$('.banners__slider').slick({
		arrows: false,
		dots: true,
	});
	$('.lk__sidebar-tab').click(function(event) {
		event.preventDefault();
		$('.lk__sidebar-tab').removeClass('active-tab');
		$(this).addClass('active-tab');
		var index = $(this).index();
		$('.lk__content').removeClass('active');
		$('.lk__content-wrapper .lk__content').eq(index).addClass('active');
	});
	$('.more-order-detail').click(function(event) {
		event.preventDefault();
		$('.order__item').removeClass('active');
		$(this).parents('.order__item').addClass('active');
	});
});