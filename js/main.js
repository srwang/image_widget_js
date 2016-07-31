$(document).ready(function(){


$('.img-container#0').show();

//show images
$('body').on('click', '.next-btn', function(){
	changeImage('next', $(this));
});
$('body').on('click', '.last-btn', function(){
	changeImage('last', $(this));
});

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

	$('.img-container#' + index).fadeIn(200);
}

//resize img container
$('.img-container').each(function(){
	var imageId = $(this).attr('id'),
		hiddenImg = document.getElementsByClassName('hidden-img')[imageId],
		proportion = hiddenImg.naturalWidth / hiddenImg.naturalHeight,
		newWidth = $(this).height() * proportion;

	$(this).css({'max-width':newWidth});
});

});