angular.module('imgWidget', [])
  .controller('ImageGalleryController', ['$scope', function($scope) {

    //default images
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
    }

    $scope.nextImage = function(ev) {
        $scope.changeImage('next', $(ev.target));
    }

    $scope.lastImage = function(ev) {
        $scope.changeImage('last', $(ev.target));
    }

    $scope.changeImage = function (direction, btn) {
        var imgContainer = btn.parents()[2];
        $(imgContainer).hide();

        //makes sure index resets if last or first element
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

    $scope.resize = function (img) {
        //set container width based on bg img proportions
        var imageId = img.attr('id'),
            hiddenImg = document.getElementsByClassName('hidden-img')[imageId],
            proportion = hiddenImg.naturalWidth / hiddenImg.naturalHeight,
            newWidth = img.height() * proportion;

        img.css({'max-width':newWidth});
    }

  }])
    .directive('removeImg', function () {
        return {
          link: function(scope, element) {

            element.bind('click', function(ev) {

                //go to next
                $(ev.target).parent().find('.next-btn').trigger('click');
                //delete from scope
                scope.images.splice(parseInt($(ev.target).parents()[1].id), 1);
                scope.$apply();
            });
          }
        };
    })
    .directive('showFirst', ['$timeout', function($timeout) {
        return {
            link: function(scope, element) {

                //allow dom time to create element from template
                $timeout(function(){
                    if (!$('.img-container').is(':visible')) {
                        //show first image by default
                        $('.img-container#0').show();
                    } 
                    
                    scope.resize($(element));
                }, 300);
            }
        }
    }]);


