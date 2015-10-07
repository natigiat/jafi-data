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

	$(".preview , .mobile , .insperation").on('click', function() {	
		// $('.ui-layout-resizer').hide();
		myLayout.hide("south");
		myLayout.hide("west");
		myLayout.hide("north");
		$('.scannerNav').hide();
		$('.ui-layout-resizer').hide();
		$('.ui-layout-container').append('<nav role="navigation" class="navbar scannerNav navbar-static-top previewModeNav"> <div class="navbar-header"><a class="navbar-brand editorBack">Editor</a></div> <div id="bs-example-navbar-collapse-8" class="collapse navbar-collapse"> <ul class="nav navbar-nav"> <li class="active"><a href="#"><i class="fa fa-desktop fa-2x"></i></a></li> <li><a href="#"><i class="fa fa-mobile fa-2x"></i></a></li> </ul><ul class="nav navbar-nav navbar-right publishNav"><li><a class="bactive">Preview Mode</a></li></ul> </div> </nav>');
		$('.ui-layout-center').css('top', '20px!important');

	});

	$('.mobile').on('click', function() {
		$('iframe').addClass('mobileView');
	});
	

	$(document).on("click", ".editorBack , .fa-desktop",function(){
		// myLayout.show("south");
		// myLayout.show("west");
		myLayout.show("north");
		$('.scannerNav').show();
		$('.ui-layout-resizer').show();
		$('.previewModeNav').remove();
		$('iframe').removeClass('mobileView');
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
    

    //field autocomltet
    var config = {
	  initialList: 'foods',
	  maxTokenGroups: 1,
	  lists: {
	    foods: [
	      { value: 'Business & Services', children: 'Business' },
	      { value: 'Blog', children: 'Blog' },
	      { value: 'Hotel & travels', children: 'Hotel' },
	      { value: 'Music', children: 'Music' },
	      { value: 'Online Store', children: 'Store' },
	      { value: 'Entertainment', children: 'Entertainment' },
	      { value: 'Restaurant & Hospitality', children: 'Restaurant' },
	      { value: 'Photography', children: 'Photography' },
	      { value: 'Creative Arts', children: 'Creative' },
	      { value: 'Design', children: 'Design' },
	      { value: 's', children: 'Fashion' },


	      
     

	    ],
	    Business: ['Advertising & Marketing','Cars & Transportation','Community & Education','Computing & Apps','Consulting & Coaching','Finance & Law','Games & Toys','Health & Beauty','Home & Garden','Hotel & Travel','Maintenance Services','Online Store'],
	    Blog: ['Business','Personal','Reviews'],
	    Hotel: ['Hotel','Travel'],
	    Music: ['Band','DJ','Music Production','Musicians','Singer / Songwriter'],
	    Store: [ 'Clothing & Accessories' ,'Health & Beauty','Other'],
	    Entertainment: ['Actors & Theater','Dance','Event Production','Film' ,'Nightlife','Performing Arts'],
	    Restaurant: ['Bar & Club','Cafe & Restaurant','Catering & Entertaining','Food & Drink','Hotel'],
	    Photography: ['Event Photographer','Pro Photographer','Sport Photographer','Travel Photographer','Wedding Photographer'],
        Creative: ['Actors & Theater','Artist','Author & Writer','Handicraft','Painter & Illustrator','Portfolio'],
	    Design: [ 'Architect & Interiors','Design Agency','Designer','Fashion Designer','Portfolios','Web Designer'],
        Fashion: [ 'Accessories & Jewelry','Clothing','Electronics','Hair & Beauty','Model','Stylist'],
       
	  }
	};

	if($('#search_bar').length ){
       var widget = new AutoComplete('search_bar', config);
	}
	
	





	$('.btnProgect').on('click',  function() {
		var progectName = $('.progectName').text();
		var htmlValue = myCodeMirror.getValue('\n');
    	var cssValue = myCodeMirrorCss.getValue('\n');
    	var jsValue = myCodeMirrorJs.getValue('\n');


        var cinds = widget.getValue();
	    console.log(cinds);
	        var Fil = cinds[0][0].value;
	        var Fil_c = cinds[0][1].value;


        var filter = Fil;
	    var filter_child = Fil_c;

		var parameters = { progectName: progectName ,filter:filter ,filter_child:filter_child,  html: htmlValue , css: cssValue , js: jsValue};
		$.post( '/scanner', parameters, function(data) {
	       alert(data);
	    });
	});



	$('.update').on('click',  function() {
		var url      = window.location.href; 
		var pieces = url.split("/");
		var progect = pieces[pieces.length - 1];
		
		var progectName = progect;
		var htmlValue = myCodeMirror.getValue('\n');
    	var cssValue = myCodeMirrorCss.getValue('\n');
    	var jsValue = myCodeMirrorJs.getValue('\n');

		var parameters = { progectName: progectName , html: htmlValue , css: cssValue , js: jsValue};
		$.post( '/scanner', parameters, function(data) {
	       alert(data);
	    });
	});





	

	
});