jQuery(document).ready(function($) {

    var url      = window.location.href; 
    var pieces = url.split("/");
	var CheckIfEditPage = pieces[pieces.length - 3];

	// var progectId = $('.progectId').val();

	//reset global variables******************************************
    (function (global) {
	        global.localStorage.setItem("html", '');
	        global.localStorage.setItem("css", '');
	        global.localStorage.setItem("js", '');
	}(window));

	//main layout page layouy ******************************************
	var myLayout = $('body').layout();
	$('body').layout({ applyDefaultStyles: true });
	var state = myLayout.state;
	myLayout.sizePane("west", 600);
    myLayout.close( "west");
    myLayout.sizePane("south", 290);


     
    //hide drow pallte ******************************************
    $('#drow').hide();

    $('.drowB').click(function(event) {
    	$('#drow').show();
    	$('.mainContainer').hide();
    });

   


	//navbar icone for code and style active ******************************************
	var styleClick = state.west.isClosed ? $('.styleB').find('a').removeClass('bactive') : $('.styleB').find('a').addClass('bactive');
	var codeClick = state.west.isClosed ? $('.codeB').find('a').removeClass('bactive') : $('.codeB').find('a').addClass('bactive');

	
	$('.navbar').on('click', function() {
		
		var styleClick = state.west.isClosed ? $('.styleB').find('a').removeClass('bactive') : $('.styleB').find('a').addClass('bactive');
		var codeClick = state.west.isClosed ? $('.codeB').find('a').removeClass('bactive') : $('.codeB').find('a').addClass('bactive');
		
	});


	//setup modal ******************************************
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus();
	});


	//close and open layouts from nav link ******************************************
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
		
		$('.ui-layout-center').find('.menu').hide();
		myLayout.hide("south");
		myLayout.hide("west");
		myLayout.hide("north");
		$('.scannerNav').hide();
		$('.ui-layout-resizer').hide();
		$('.ui-layout-container').append('<nav role="navigation" class="navbar scannerNav navbar-static-top previewModeNav"> <div class="navbar-header"><a class="navbar-brand editorBack">EDITOR</a></div> <div id="bs-example-navbar-collapse-8" class="collapse navbar-collapse"> <ul class="nav navbar-nav navSmartphones"> <li class="active"><a class="hint--bottom mobile" data-hint="Desktop View"><span class="icon-display fs1"></span></a></li></ul><ul class="nav navbar-nav navbar-right publishNav"><li><a class="bactive">Preview Mode</a></li></ul> </div> </nav>');
		$('.ui-layout-center').css('top', '20px!important');
		if(!($('.rangSmartphones').length)){
			$('.navSmartphones').after('<div class="rangSmartphones col-sm-6 col-sm-offset-2"><div class="range"> <input type="range" min="1" max="7" steps="1" value="1"> </div> <ul class="range-labels"> <li class="active selected">Iphone</li> <li>Samsong</li> <li>HTC</li> <li>LG</li> <li>Ipad Mini</li> <li>Ipad</li> <li>Laptop</li> </ul></div>');
	    }
	});

	$('.mobile').on('click', function() {
		$('iframe').addClass('mobileView');
	});
	

	$(document).on("click", ".editorBack , .icon-display",function(){
		// myLayout.show("south");
		// myLayout.show("west");
		$('.rangSmartphones').remove();
		$('.ui-layout-cente').find('.menu').show();
		myLayout.show("north");
		$('.scannerNav').show();
		$('.ui-layout-resizer').show();
		$('.previewModeNav').remove();
		$('iframe').removeClass('mobileView');
	});
     
    /*----------  range script  ----------*/
    
    var sheet = document.createElement('style'),  
	  $rangeInput = $('.range input'),
	  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

	document.body.appendChild(sheet);

	var getTrackStyle = function (el) {  
	  var curVal = el.value,
	      val = (curVal - 1) * 16.666666667,
	      style = '';
	  
	  // Set active label
	  $('.range-labels li').removeClass('active selected');
	  
	  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
	  
	  curLabel.addClass('active selected');
	  curLabel.prevAll().addClass('selected');
	  
	  // Change background gradient
	  for (var i = 0; i < prefs.length; i++) {
	    style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
	    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
	  }

	  return style;
	}

	$rangeInput.on('input', function () {
	  sheet.textContent = getTrackStyle(this);
	});

	// Change input value on label click
	$('.range-labels li').on('click', function () {
	  var index = $(this).index();
	  
	  $rangeInput.val(index + 1).trigger('input');
	  
	});

	/*----------  range script  ----------*/

	
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
	  styleActiveLine: true,
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
	  // styleSelectedText: true,
	  styleActiveLine: true,
	  scrollbarStyle: "simple",
	  gutter: true,
	  extraKeys: {"Ctrl-Space": "autocomplete"},
	  value: $dataCss

	});
 


	var myCodeMirrorJs = CodeMirror(document.getElementById("template-js") , {
	  mode:  "text/javascript",
	  theme: "ambiance",
	  lineNumbers: true,
	  styleActiveLine: true,
	  scrollbarStyle: "simple",
	  extraKeys: {"Ctrl-Space": "autocomplete"},
	  value: $dataJs
	});
	
	$('.editor').resizable({
      maxHeight: 250,
      maxWidth: 750,
      minHeight: 150,
      minWidth: 20,
      handles: "e"
	});

    
    

    //controle editor resize
    // template-css

    $('.ui-layout-south').on('mousemove' , '.editerWraper' , function() {
    var win = $( window ).width();
    var editor1 = $('#template-html').width();
    var editor2 =$('#template-css').width();
    var editor3 = win - (editor1 + editor2);

    $('#template-js').width(editor3 -28);
    });


 	
    //set values for each page on load to load element
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
	    // console.log(cinds);
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
		var progectId = $('.progectId').val();

	
		
		var progectName = progect;
		var htmlValue = myCodeMirror.getValue('\n');
    	var cssValue = myCodeMirrorCss.getValue('\n');
    	var jsValue = myCodeMirrorJs.getValue('\n');
        

		var parameters = { progectName: progectName , progectId:progectId, html: htmlValue , css: cssValue , js: jsValue};
		$.post( '/scanner', parameters, function(data) {
	       alert(data);
	    });
	});


	//Edit element post to save element
	$('.saveElementEdit').on('click',  function() {

        
        // console.log('good');
        var elmentName  =  $('.elementName').val();
        var elementHtml =  myCodeMirror.getValue('\n');
        var elementCss  =  myCodeMirrorCss.getValue('\n');
        var elementJs   =  myCodeMirrorJs.getValue('\n');

        // console.log(elementHtml);
        

        var parameters = { elmentName: elmentName , elementHtml: elementHtml , elementCss: elementCss , elementJs: elementJs};
        $.post( '/scanner/element', parameters, function(data) {
           alert(data);
        }); 
    });


    //manage selected div
    $('#template-html').on('click', function() {
           
           //rm activeElement class
           $('body').contents().find('iframe').contents().find('.htmlRow').find('.activeElement').removeClass('activeElement');

           var active = $('.CodeMirror-activeline').text();
           var css = $('#template-css').text();
           

           if (active.indexOf("class") >= 0) {
           	  // get element by line click
           	  var myString = active.split('"');
           	  var element = myString[1]
           	  var elementDiv = ('.'+element+'');
           	  var item = $('body').contents().find('iframe').contents().find('.htmlRow').find(elementDiv);
           	  item.addClass('activeElement');

           	  // myCodeMirrorCss.lastLine(element);
           	  // myCodeMirrorCss.replaceRange("foo\n", {line: Infinity});
           	  //append name of element to css editor
              
           	  
              if (!(css.indexOf(element) >= 0))
               {
           	  	 myCodeMirrorCss.replaceRange("\n."+element+"{\n}", {line: Infinity});
           	   }
           	  
           }
           else if (active.indexOf("id") >= 0) {
           	  // get element by line click
           	  var myString = active.split('"');
           	  var element = myString[1]
           	  var elementDiv = ('#'+element+'');
           	  var item = $('body').contents().find('iframe').contents().find('.htmlRow').find(elementDiv);
           	  item.addClass('activeElement');
           	  //append name of element to css edito
           	  if (!(css.indexOf(element) >= 0))
               {
           	  	 myCodeMirrorCss.replaceRange("\n#"+element+"{\n}", {line: Infinity});
           	   }
           	  
           }
         
    });

    



    

  

	

	
});