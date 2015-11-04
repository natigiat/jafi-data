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


			var elements = document.querySelectorAll('.editable'),
    		editor = new MediumEditor(elements);

    		var editor = new MediumEditor('.editable');

		   
		}(window));


		});

	    


	}


	
});