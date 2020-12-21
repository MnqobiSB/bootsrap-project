$(document).ready(function () {
	// Carousel code
	$('#mycarousel').carousel({ interval: 2000 });
	$('#carouselButton').click(function () {
		if ($('#carouselButton').children('span').hasClass('fa-pause')) {
			$('#mycarousel').carousel('pause');
			$($('#carouselButton').children('span').removeClass('fa-pause'));
			$($('#carouselButton').children('span').addClass('fa-play'));
		} else if ($('#carouselButton').children('span').hasClass('fa-play')) {
			$('#mycarousel').carousel('cycle');
			$($('#carouselButton').children('span').removeClass('fa-play'));
			$($('#carouselButton').children('span').addClass('fa-pause'));
		}
	});

	// Reserve modal code
	$('#toggle-reserve-modal').click(function () {
		$('#reserve').modal('show');
	});

	// Login modal code
	$('#toggle-login-modal').click(function () {
		$('#loginModal').modal('show');
	});
});
