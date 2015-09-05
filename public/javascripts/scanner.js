jQuery(document).ready(function($) {


	//main layout page layouy ******************************************
	var myLayout = $('body').layout();
	$('body').layout({ applyDefaultStyles: true });
	var state = myLayout.state;
	myLayout.sizePane("west", 600);
    myLayout.close( "west");
    myLayout.close( "south");


    //hide drow pallte
    $('#drow').hide();

    $('.drowB').click(function(event) {
    	$('#drow').show();
    	$('.mainContainer').hide();
    });

   


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
		myLayout.toggle("south");
		$('.mainContainer').show();
    	$('#drow').hide();

	});

	$(".preview , .fa-mobile , .insperation").on('click', function() {	
		// $('.ui-layout-resizer').hide();
		myLayout.hide("south");
		myLayout.hide("west");
		myLayout.hide("north");
		$('.scannerNav').hide();
		$('.ui-layout-resizer').hide();
		$('.ui-layout-container').append('<nav role="navigation" class="navbar scannerNav navbar-static-top previewModeNav"> <div class="navbar-header"><a class="navbar-brand editorBack">Editor</a></div> <div id="bs-example-navbar-collapse-8" class="collapse navbar-collapse"> <ul class="nav navbar-nav"> <li class="active"><a href="#"><i class="fa fa-desktop fa-2x"></i></a></li> <li><a href="#"><i class="fa fa-mobile fa-2x"></i></a></li> </ul><ul class="nav navbar-nav navbar-right publishNav"><li><a class="bactive">Preview Mode</a></li></ul> </div> </nav>');
		$('.ui-layout-center').css('top', '20px!important');

	});

	$('.fa-mobile').on('click', function() {
		$('iframe').addClass('mobileView');
	});


	$('.insperation').on('click', function() {
		// http://codepen.io/32bitkid/pen/VYqXZX
		$('#drow').after("<article class='buttonBaners'> <nav class='btn-bar nav-dark'> <a href='#' class='btn btn-glass'> CodePen </a> <a href='#' class='btn btn-glass btn-primary'> <i class='fa fa-fw fa-lg fa-chevron-right'></i> CSS Deck </a> <a href='#' class='btn btn-glass btn-success'> <i class='fa fa-fw fa-lg fa-check'></i> JS Bin </a> <a href='#' class='btn btn-glass btn-warning'> <i class='fa fa-fw fa-lg fa-exclamation '></i> Dabblet </a> <a href='#' class='btn btn-glass btn-danger'> <i class='fa fa-fw fa-lg fa-times'></i> Tinkerbin </a> <a href='#' class='btn btn-glass btn-info'> <i class='fa fa-fw fa-lg fa-info '></i> Liveweave </a> </nav> </article> "); 
		$('.buttonBaners').after("<iframe class='insperationIframe' src='http://www.w3schools.com'></iframe>");
		$('.mainContainer').remove();
		$('#drow').hide();
	});		


	

	$(document).on("click", ".editorBack , .fa-desktop",function(){
		myLayout.show("south");
		myLayout.show("west");
		myLayout.show("north");
		$('.scannerNav').show();
		$('.ui-layout-resizer').show();
		$('.previewModeNav').remove();
	});


	//get data for edit scanner
	$dataHtml = $('.dataHtml').val();
	$dataCss = $('.dataCss').val();
	$dataJs = $('.dataJs').val();
	
	if(!$dataHtml){ $dataHtml='';}
	if(!$dataCss){ $dataCss='';}
	if(!$dataJs){ $dataJs='';}
	

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
      value: $dataHtml
	});

	var myCodeMirrorCss = CodeMirror(document.getElementById("template-css") , {
	  mode:  "text/css",
	  theme: "ambiance",
	  lineNumbers: true,
	  scrollbarStyle: "simple",
	  gutter: true,
	  extraKeys: {"Ctrl-Space": "autocomplete"},
	  value: $dataCss

	});

	var myCodeMirrorJs = CodeMirror(document.getElementById("template-js") , {
	  mode:  "text/javascript",
	  theme: "ambiance",
	  lineNumbers: true,
	  scrollbarStyle: "simple",
	  extraKeys: {"Ctrl-Space": "autocomplete"},
	  value: $dataJs
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

	
	





	//MANAGIN PUBLISING SITE
	//check if website exsist
	$('.progectInput').on('keyup' , function(event) {
		var progectName = '';
		var progectName = $(this).val();
		// $('.progectName').text() = '';
		$('.progectRow').find('b').text(progectName);
	});

	$('.btnProgect').on('click',  function() {
		var progectName = $('.progectName').text();
		var htmlValue = myCodeMirror.getValue('\n');
    	var cssValue = myCodeMirrorCss.getValue('\n');
    	var jsValue = myCodeMirrorJs.getValue('\n');

		var parameters = { progectName: progectName , html: htmlValue , css: cssValue , js: jsValue};
		$.post( '/scanner', parameters, function(data) {
	       alert(data);
	    });
	});




	

	
});