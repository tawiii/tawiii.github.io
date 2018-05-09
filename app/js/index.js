jQuery(document).ready(function($) {
	var $header = $('.header');
	var scroll = null;	
	var contact = $(".contacts");	
	var networkLink = $('.network_link');
	var rangeOffset = null;
	var success = $('.success-block');
	var send = $('.form_send');
	var base = $('.form_base');

	$(send).on('click', function(event) {
		// event.preventDefault();
		$(success).addClass('animated fadeInDown');
		$(success).show();
		$(base).hide();
	});

	$(window).scroll(function() {
		scroll = $(window).scrollTop();
		rangeOffset = $(contact).offset();
		
		if (scroll > 1) {
			$($header).addClass('headhe');
		} else {
			$($header).removeClass('headhe');
		}

		if (scroll >= (rangeOffset.top -350)) {
			$(networkLink).show();
		} else {
			$(networkLink).hide();
		}
	});
});


