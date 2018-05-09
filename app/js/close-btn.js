$(document).ready(function(){
	var toogle = true;
	$('.close').on('click', function(event) {
		event.preventDefault();
		if (toogle) {
			toogle = false;
			$('.header').removeClass('header__mod-on');
			$('.header').addClass('header__mod-off');
			// $('.close-btn').css('transform', 'scale(0)');
			// $('.close-btn__mod').css({
			// 	display: 'block',
			// 	transform: 'scale(1)'
			// });
			$('.close-btn').removeClass('close-btn__mod-on');
			$('.close-btn').addClass('close-btn__mod-off');
			// $('.close-btn-top').addClass('close-btn__mod-on');
		} else {
			toogle = true;
			$('.header').removeClass('header__mod-off');
			$('.header').addClass('header__mod-on');
			// $('.close-btn').css({
			// 	display: 'block',
			// 	transform: 'scale(1)'
			// });
			$('.close-btn').removeClass('close-btn__mod-off');
			// $('.close-btn-top').removeClass('close-btn__mod-on');
			$('.close-btn').addClass('close-btn__mod-on');
		}
		
	});
});  