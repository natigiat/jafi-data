jQuery(document).ready(function($) {
	if($('.result').get(0)){
		console.log('sdfd');
	  
		var a = $("#mainEditor", top.document);

		a.on('keyup', function() {
		//mirror valuses
		(function (global) {
		    var addhtml = global.localStorage.getItem("addhtml");
		    var addcss = global.localStorage.getItem("addcss");
		    var addjs = global.localStorage.getItem("addjs");

		    $('.addhtmlRow').html(addhtml);

	    	$('.addhtmlcss').find('style').html(addcss);

	    	$('.addhtmljs').find('script').html(addjs);

	  //   	$( "h1 , h2 ,h3, h4 ,h5, h6, a , span, p" ).each(function() {
			//   $( this ).addClass('editable');
			// });

			var elements = document.querySelectorAll('.editable'),
    		editor = new MediumEditor(elements);

    		var editor = new MediumEditor('.editable');

		   
		}(window));


		});

	    


	}


	
});