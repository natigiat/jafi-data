jQuery(document).ready(function($) {
	if($('.index').get(0)){
	  
	  $('.slider').slick({
		  infinite: true,
		  autoplay: true,
  		  autoplaySpeed: 2000,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear'
	  });

	}

	// page layouy
	$('body').layout({ applyDefaultStyles: true });

	// page editor
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
	  }
      // value: document.documentElement.innerHTML
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

	
});