$(document).ready(function() {
	$('.main-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
		prevArrow: '<div class="slider-main__arrow slider-main__arrow_left"><div>',		
		nextArrow: '<div class="slider-main__arrow slider-main__arrow_right"><div>',
	});
	$('.production-slider_top').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.production-slider_bottom'
	});
	$('.production-slider_bottom').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		],
		prevArrow: '<div class="slider-arrow slider-arrow_left"><div>',		
		nextArrow: '<div class="slider-arrow slider-arrow_right"><div>',			
		asNavFor: '.production-slider_top'
	});
	$('.feedback-slider').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		],
		prevArrow: '<div class="slider-feedback__arrow slider-feedback__arrow_left"><div>',		
		nextArrow: '<div class="slider-feedback__arrow slider-feedback__arrow_right"><div>',			
	});
	
	
});

$(document).ready(function() {
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu');
	var menu2 = $('.menu li');

	link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
	link_active.click(function(){
		link.removeClass('menu-link_active');
	});
	menu2.click(function(){
		menu.toggleClass('menu_active');
		link.removeClass('menu-link_active');
	})
});
