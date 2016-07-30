angular.module('imgWidget', [])
  .controller('ImageGalleryController', function() {
    var gallery = this;
    gallery.images = [
    	{
    		id: 0,
	    	title: 'Myself, kitten. Striving for cat.', 
	    	caption: 'Dream about hunting birds. Bathe private parts with tongue then lick owner\'s face pooping rainbow while flying in a toasted bread costume in space love to play with owner\'s hair tie flop over, and loves cheeseburgers. Poop in litter box, scratch the walls kitty scratches couch bad kitty. Mark territory. Favor packaging over toy attack the dog then pretend like nothing happened stare at ceiling light yet when in doubt, wash cough furball wake up human for food at 4am. Stare at ceiling hopped up on catnip, or hopped up on catnip when in doubt, wash but brown cats with pink ears bleghbleghvomit my furball really tie the room together but i like big cats and i can not lie.', 
	    	url: 'http://placekitten.com/500/800'
    	},
    	{
    		id: 1,
    		title: 'Escape',
    		caption: 'Not albino',
    		url: 'http://placekitten.com/800/500'
    	},
    	{
    		id: 2,
    		title: 'Iron Throne',
    		caption: 'Human give me attention meow fall over dead (not really but gets sypathy) so leave dead animals as gifts meow for need to chase tail, yet sleep on dog bed, force dog to sleep on floor.',
    		url: 'http://placekitten.com/800/800'
    	}
    ];

    //add and delete image functionality
    //create a wrapper for the widget
    //responsive

    gallery.addImage = function() {
    	gallery.images.push({title:gallery.addTitle, caption:gallery.addCaption, url:gallery.addUrl});
    	gallery.addTitle = '';
    	gallery.addImages = '';
    	gallery.addUrl = '';
    }

  });


