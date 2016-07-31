angular.module('imgWidget', [])
  .controller('ImageGalleryController', ['$scope', function($scope) {
    $scope.images = [
    	{
	    	title: 'Myself, kitten. Striving for cat.', 
	    	caption: 'Dream about hunting birds. Bathe private parts with tongue then lick owner\'s face pooping rainbow while flying in a toasted bread costume in space love to play with owner\'s hair tie flop over, and loves cheeseburgers. Poop in litter box, scratch the walls kitty scratches couch bad kitty. Mark territory. Favor packaging over toy attack the dog then pretend like nothing happened stare at ceiling light yet when in doubt, wash cough furball wake up human for food at 4am. Stare at ceiling hopped up on catnip, or hopped up on catnip when in doubt, wash but brown cats with pink ears bleghbleghvomit my furball really tie the room together but i like big cats and i can not lie.', 
	    	url: 'http://placekitten.com/500/800'
    	},
    	{
    		title: 'Escape',
    		caption: 'Still not albino',
    		url: 'http://placekitten.com/800/500'
    	},
    	{
    		title: 'Iron Throne',
    		caption: 'Human give me attention meow fall over dead (not really but gets sypathy) so leave dead animals as gifts meow for need to chase tail, yet sleep on dog bed, force dog to sleep on floor.',
    		url: 'http://placekitten.com/800/800'
    	}
    ];

    $scope.addImage = function() {
    	$scope.images.push({	
    		title:$scope.imgTitle, 
    		caption:$scope.imgCaption, 
    		url:$scope.imgUrl
		});
    	$scope.imgTitle= '';
    	$scope.imgCaption = '';
    	$scope.imgUrl = '';

    	setTimeout(function(){
	    	if($scope.images.length===1) {
	    		$('.img-container#0').show(); 
            }
    	}, 500);
    }

    $scope.removeImage = function(imageId) {
    	$('.img-container#' + imageId).find('.next-btn').trigger('click');
    	$scope.images.splice(imageId, 1);
    }

  }]);


