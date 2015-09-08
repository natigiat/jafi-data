jQuery(document).ready(function($) {
  


	$('body').on('click',  '.itemSubText' , function() {
		tinymce.init({
	    selector: "textarea",
	    statusbar: false,
	    plugins: [
	        "advlist autolink lists link image charmap print preview anchor",
	        "searchreplace visualblocks code fullscreen",
	        "insertdatetime media table contextmenu paste"
	    ],
	    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",

	    menubar: false,
        statusbar: false,
        contextmenu: "cut copy paste",
        toolbar_item_size: "small",


        setup: function (theEditor) {
        theEditor.on('focus', function () {
	            $(this.contentAreaContainer.parentElement).find("div.mce-toolbar-grp").show();
	        });
	        theEditor.on('blur', function () {
	            $(this.contentAreaContainer.parentElement).find("div.mce-toolbar-grp").hide();
	        });
	        theEditor.on("init", function () {
	            $(this.contentAreaContainer.parentElement).find("div.mce-toolbar-grp").hide();
	        });
	    }


	});
	});

 //    sourceImage = $('.imageBlock').find('img');
 //    var colorThief = new ColorThief();
 //    var color = colorThief.getColor(sourceImage);
    
	// // dominantColor = getDominantColor(myImage);
	// // paletteArray = createPalette(myImage, 10);

 //    console.log(color);

});