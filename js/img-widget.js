angular.module('imgWidget', [])
  .controller('ImageGalleryController', ['$scope', function($scope) {

    //current image
    $scope.shownIndex = 0;
    //default images
    $scope.images = [
    	{
	    	title: 'Myself, kitten. Striving for cat.', 
	    	caption: 'Dream about hunting birds. Bathe private parts with tongue then lick owner\'s face pooping rainbow while flying in a toasted bread costume in space love to play with owner\'s hair tie flop over, and loves cheeseburgers. Poop in litter box, scratch the walls kitty scratches couch bad kitty. Mark territory. Favor packaging over toy attack the dog then pretend like nothing happened stare at ceiling light yet when in doubt, wash cough furball wake up human for food at 4am. Stare at ceiling hopped up on catnip, or hopped up on catnip when in doubt, wash but brown cats with pink ears bleghbleghvomit my furball really tie the room together but i like big cats and i can not lie.', 
	    	url: 'http://placekitten.com/500/800',
            width: ''
    	},
    	{
    		title: 'Escape',
    		caption: 'Still not albino',
    		url: 'http://placekitten.com/800/500',
            width: ''
    	},
    	{
    		title: 'Iron Throne',
    		caption: 'Human give me attention meow fall over dead (not really but gets sypathy) so leave dead animals as gifts meow for need to chase tail, yet sleep on dog bed, force dog to sleep on floor.',
    		url: 'http://placekitten.com/700/700',
            width: ''
    	}
    ];

    $scope.nextImage = function() {

        if ($scope.shownIndex<$scope.images.length-1){
            $scope.shownIndex++;
        } else {
            $scope.shownIndex = 0;
        }
    }

    $scope.lastImage = function() {

        if ($scope.shownIndex>0) {
            $scope.shownIndex--;
        } else {
            $scope.shownIndex = $scope.images.length-1;
        }
    }

    $scope.addImage = function() {
        $scope.images.push({    
            title:$scope.imgTitle, 
            caption:$scope.imgCaption, 
            url:$scope.imgUrl,
            width:''
        });
        $scope.imgTitle= '';
        $scope.imgCaption = '';
        $scope.imgUrl = '';
    }

    $scope.removeImage = function() {
        $scope.images.splice($scope.shownIndex, 1);
        $scope.nextImage();
    }


  }])
    .directive('resize', ['$timeout', function($timeout) {
        return {
            link: function(scope, element) {

                var img = new Image();
                img.src = scope.image.url;

                var proportion = img.width / img.height;

                scope.image.width = ($(element).height() * proportion) + 'px';
            }
        };
    }])



