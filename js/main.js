$(document).ready(function(){

	$('.img-container:first-child').css({'display':'block'});

	$('.next-btn').click(function(){
		changeImage('next', $(this));
	});
	$('.last-btn').click(function(){
		changeImage('last', $(this));
	})

	function changeImage(direction, btn) {
		var imgContainer = btn.parents()[2];
		$(imgContainer).hide();

		var index = parseInt($(imgContainer).attr('id'));

		if (direction==='next' && index <($('.img-container').length-1)) {
			index +=1;
		} else if (direction==='next') {
			index = 0;
		} else if (direction==='last' && index > 0) {
			index -=1;
		} else if (direction==='last') {
			index = $('.img-container').length-1;
		};

		$('.img-container#' + index).show();
	}



});