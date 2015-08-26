jQuery(document).ready(function($) {

	//main layout page layouy ******************************************
	var myLayout = $('body').layout();
	$('body').layout({ applyDefaultStyles: true });
	var state = myLayout.state;
	console.log(state.west);


	//navbar icone for code and style active
	var styleClick = state.west.isClosed ? $('.styleB').find('a').removeClass('bactive') : $('.styleB').find('a').addClass('bactive');
	var codeClick = state.west.isClosed ? $('.codeB').find('a').removeClass('bactive') : $('.codeB').find('a').addClass('bactive');

	$('.navbar').on('click', function() {
		
		var styleClick = state.west.isClosed ? $('.styleB').find('a').removeClass('bactive') : $('.styleB').find('a').addClass('bactive');
		var codeClick = state.west.isClosed ? $('.codeB').find('a').removeClass('bactive') : $('.codeB').find('a').addClass('bactive');
		
	});


	//setup modal
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus();
	});


	//close and open layouts from nav link
	$('.styleB').on('click', function() {	
		// $('.ui-layout-resizer').hide();
		myLayout.toggle("west");
	});


	$('.codeB').on('click', function() {	
		// $('.ui-layout-resizer').hide();
		myLayout.toggle("south");
	});

	$('.preview').on('click', function() {	
		// $('.ui-layout-resizer').hide();
		myLayout.hide("south");
		myLayout.hide("west");
		myLayout.hide("north");
		$('.scannerNav').hide();
		$('.ui-layout-resizer').hide();
		$('.ui-layout-container').append('<nav role="navigation" class="navbar scannerNav navbar-static-top previewModeNav"> <div class="navbar-header"><a class="navbar-brand editorBack">Editor</a></div> <div id="bs-example-navbar-collapse-8" class="collapse navbar-collapse"> <ul class="nav navbar-nav"> <li class="active"><a href="#"><i class="fa fa-desktop fa-2x"></i></a></li> <li><a href="#"><i class="fa fa-mobile fa-2x"></i></a></li> </ul><ul class="nav navbar-nav navbar-right publishNav"><li><a class="bactive">Preview Mode</a></li></ul> </div> </nav>');
		$('.ui-layout-center').css('top', '20px!important');

	});

	$(document).on("click", '.editorBack',function(){
		myLayout.show("south");
		myLayout.show("west");
		myLayout.show("north");
		$('.scannerNav').show();
		$('.ui-layout-resizer').show();
		$('.previewModeNav').remove();
	});



	

	// page editor  ******************************************
	var myCodeMirror = CodeMirror(document.getElementById("template-html") , {
	  mode: "htmlmixed",
	  theme: "ambiance",
	  lineNumbers: true,
	  scrollbarStyle: "simple",
	  gutter: true,
	  extraKeys: {"Ctrl-Space": "autocomplete"},
	  onKeyEvent: function (e, s) {
		if (s.type == "keyup") {
		   CodeMirror.showHint(e);
		}
	  },
      // value: "sdfsdfsdfsd"
	});

	var myCodeMirrorCss = CodeMirror(document.getElementById("template-css") , {
	  mode:  "text/css",
	  theme: "ambiance",
	  lineNumbers: true,
	  scrollbarStyle: "simple",
	  gutter: true,
	  extraKeys: {"Ctrl-Space": "autocomplete"}

	});

	var myCodeMirrorJs = CodeMirror(document.getElementById("template-js") , {
	  mode:  "text/javascript",
	  theme: "ambiance",
	  lineNumbers: true,
	  scrollbarStyle: "simple",
	  extraKeys: {"Ctrl-Space": "autocomplete"}
	});
	
	$('.editor').resizable({
      maxHeight: 250,
      maxWidth: 550,
      minHeight: 150,
      minWidth: 200
	});

 	



	//get codevalueses

	$('.ui-layout-pane-south').on('keyup', function() {
		//mirror valuses
		var htmlValue = myCodeMirror.getValue('\n');

    	var cssValue = myCodeMirrorCss.getValue('\n');

    	var jsValue = myCodeMirrorJs.getValue('\n');


    	$('.htmlRow').html(htmlValue);

    	$('.htmlcss').find('style').html(cssValue);

    	$('.htmljs').find('script').html(jsValue);


    	(function (global) {
	        global.localStorage.setItem("html", htmlValue);
	        global.localStorage.setItem("css", cssValue);
	        global.localStorage.setItem("js", jsValue);
		}(window));


	});

	
	


	//style selected div with border layout 
	$('.ui-layout-center').on('click', function() {	
		var current = $('.ui-layout-center').find(event.target).addClass('selected_div');

		//Remove all
   		$('.selected_div').removeClass('selected_div');
   		current.addClass("selected_div");
		
		$('.ui-layout-resizer-south').find(event.target).css('background' , 'red');
	});


	//MANAGIN PUBLISING SITE
	//check if website exsist
	$('.progectInput').on('keyup' , function(event) {
		var progectName = '';
		var progectName = $(this).val();
		// $('.progectName').text() = '';
		$('.progectRow').find('b').text(progectName);
	});

	// $('.btnProgect').on('click',  function() {
	// 	var parameters = { name: 'sdgdfg' };
	// 	$.post( '/scanner', parameters, function(data) {
	//        alert(data);
	//     });
	// });




	

	
});