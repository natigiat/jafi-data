jQuery(document).ready(function($) {
	if($('.result').get(0)){
	  
		var a = $(".ui-layout-pane-south", top.document);

		a.on('keyup', function() {
		//mirror valuses
		(function (global) {
		    var html = global.localStorage.getItem("html");
		    var css = global.localStorage.getItem("css");
		    var js = global.localStorage.getItem("js");


		    $('.addhtmlRow').html(html);

	    	$('.addhtmlcss').find('style').html(css);

	    	$('.addhtmljs').find('script').html(js);

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