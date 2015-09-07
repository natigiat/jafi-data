jQuery(document).ready(function($) {
	
	tinymce.init({
	    selector: "textarea",
	    plugins: [
	        "advlist autolink lists link image charmap print preview anchor",
	        "searchreplace visualblocks code fullscreen",
	        "insertdatetime media table contextmenu paste"
	    ],
	    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
	});

   
    
    //add intro 
	// introJs().start();
	$( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

	foo();
	
	function foo() {
	$(".child").resizable({
	    /*aspectRatio:true,*/
	    minWidth: 2,
	    minHeight: 2,
	    maxWidth: $(".parent").width(),
	    containment: "parent",
	    handles: "ne,nw,se,sw,n,w,e,s"
	});
	$(".child").draggable({
	    containment: "parent",
	    cursor: "move"
	});



	var geklikt = false;
	$(".child").click(function () {
	    if (geklikt === false) {
	        $('.ui-resizable-n').css({
	            'cursor': 'url(http://cdn.imghack.se/images/46352bfe02e1edbd653b29191f9fa66e.png),n-resize'
	        });
	        $('.ui-resizable-ne').css({
	            'cursor': 'url(http://cdn.imghack.se/images/c7c98f4dc9cfda1443105ae8d61b482b.png),ne-resize'
	        });
	        $('.ui-resizable-e').css({
	            'cursor': 'url(http://cdn.imghack.se/images/414700534ae3799a5128712367a53150.png),e-resize'
	        });
	        $('.ui-resizable-se').css({
	            'cursor': 'url(http://cdn.imghack.se/images/643d6034075406650d95ffc9f16a00b5.png),se-resize'
	        });
	        $('.ui-resizable-s').css({
	            'cursor': 'url(http://cdn.imghack.se/images/d11db5bfda1eb591298e0ee4cca84520.png),s-resize'
	        });
	        $('.ui-resizable-sw').css({
	            'cursor': 'url(http://cdn.imghack.se/images/f850c0bfe0b6765635751cc53743cdb2.png),sw-resize'
	        });
	        $('.ui-resizable-w').css({
	            'cursor': 'url(http://cdn.imghack.se/images/27f472aa020ed403f90758e4a1a221fb.png),w-resize'
	        });
	        $('.ui-resizable-nw').css({
	            'cursor': 'url(http://cdn.imghack.se/images/3ed28477033d9a58581e4b5a7f84625b.png),nw-resize'
	        });
	        geklikt = true;
	    } else {
	        $('.ui-resizable-n').css('cursor', 'n-resize');
	        $('.ui-resizable-ne').css('cursor', 'ne-resize');
	        $('.ui-resizable-e').css('cursor', 'e-resize');
	        $('.ui-resizable-se').css('cursor', 'se-resize');
	        $('.ui-resizable-s').css('cursor', 's-resize');
	        $('.ui-resizable-sw').css('cursor', 'sw-resize');
	        $('.ui-resizable-w').css('cursor', 'w-resize');
	        $('.ui-resizable-nw').css('cursor', 'nw-resize');
	        geklikt = false;
	    }
	});

	}


    //panels start

    

    //change layer dinameclly
    $('.ui-layout-center').on('click' , ".layers , .basic , .border"  , function() {
       
       var className = this.className;
       var panel = $("panel[name='" +className+ "']");
       $(panel).siblings().hide(1200);


	});
    


    //layers*********************************************


	var layer = "<layer-item class=''><icon class='eye active'></icon><icon class='lock'></icon><input spellcheck='false'></layer-item>";
	var add = "<ol class='menuAdd' id='selectable'> <li class='addItem itemText'><span class='icon-format_color_text fsLayersMenuAdd'></span><span class='addItemText'>Text</span></li> <li class='addItem itemImage'><span class='icon-image3 fsLayersMenuAdd'></span><span class='addItemText'>Image</span></li> <li class='addItem itemImages'><span class='icon-images fsLayersMenuAdd'></span><span class='addItemText'>Images</span></li> <li class='addItem itemMedia'><span class='icon-now_wallpaper fsLayersMenuAdd'></span><span class='addItemText'>Media</span></li> <li class='addItem itemShapes'><span class='icon-now_widgets fsLayersMenuAdd'></span><span class='addItemText'>Shapes</span></li> <li class='addItem itemText'><span class='icon-images fsLayersMenuAdd'></span><span class='addItemText'>Buttons</span></li> </ol>"; //pallate bottons



    //add
    $('.ui-layout-center').on('click' , 'layer-item' , function() {
		var layerIndex = $(this).index();
		console.log(layerIndex);
		//Remove all
   		$('.selected_div').removeClass('selected_div');
		$('.child:eq('+ layerIndex+' )').addClass('selected_div');
	});

	$('.add').one('click' , function(event ) {
	  
	  event.preventDefault();
	  $(this).attr("disabled", true );
	  $('side-bar').find('menu').after(add);
	  

	  $('.parent').append('<div class="child layer"></div>');
	  $('layer-item:last-child').after(layer);
	  foo();
	  
	});

    
    //add text area 
    $('.ui-layout-center').on('click' , '.itemText' , function() {

		$('.parent').append('<form method="post" action="dump.php" class="child layer"> <textarea name="content"></textarea> </form>');
	    $('layer-item:last-child').after(layer);
	    foo();

	});



    //basic*********************************************

    $('.ui-layout-center').on('click' , ".basic , .border"  , function() {
       
       var className = this.className;
       $("panel[name='" +className+ "']").show();


	});

    $('.layer').bind('click' ,function() {
    	alert(22);
    	$(this).each(function(index, el) {
	    	console.log(this.index);
	    	console.log(this.el);
	    });
    });

    


	
});