jQuery(document).ready(function($) {
	if($('.result').get(0)){
	  
		// var a = $(".mainContainer", top.document).css('background', 'red');

		$("html").on('click', function() {
		//mirror valuses
		(function (global) {
		    var html = global.localStorage.getItem("html");
		    var css = global.localStorage.getItem("css");
		    var js = global.localStorage.getItem("js");


		    $('.htmlRow').html(html);

	    	$('.htmlcss').find('style').html(css);

	    	$('.htmljs').find('script').html(js);
		   
		}(window));


		});

		

	}
	
});