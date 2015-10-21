jQuery(document).ready(function($) {
	

    $('.menu-open').click(function (event){
		modalFun('.stream-0');
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
	    // maxWidth: $(".parent").width(),
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
       if(className == 'layers'){
          $(panel).show(1200)
       }


	});
    


    //layers*********************************************


	var layer = "<layer-item class=''><icon class='eye active'></icon><icon class='lock'></icon><input spellcheck='false'></layer-item>";
	var add = "<ol class='menuAdd' id='selectable'> <li class='addItem itemText'><span class='icon-format_color_text fsLayersMenuAdd'></span><span class='addItemText'>Text</span></li> <li class='addItem itemImage'><span class='icon-image3 fsLayersMenuAdd'></span><span class='addItemText'><a data-toggle='modal' data-target='#upload'>Image</a></span></li> <li class='addItem itemImages'><span class='icon-images fsLayersMenuAdd'></span><span class='addItemText'>Images</span></li> <li class='addItem itemMedia'><span class='icon-now_wallpaper fsLayersMenuAdd'></span><span class='addItemText'>Media</span></li> <li class='addItem itemShapes'><span class='icon-now_widgets fsLayersMenuAdd'></span><span class='addItemText'>Shapes</span></li> <li class='addItem itemText'><span class='icon-images fsLayersMenuAdd'></span><span class='addItemText'>Buttons</span></li> </ol>"; //pallate bottons

    //add
    $('.ui-layout-center').on('click' , 'layer-item' , function() {
		var layerIndex = $(this).index();
		//Remove all
   		$('.selected_div').removeClass('selected_div');
		$('.child:eq('+ layerIndex+' )').addClass('selected_div');

	});


    //eye click hide item
	$('.ui-layout-center').on('click' , '.eye' , function() {
           var layerIndex = $(this).parent().index();
           $(this).toggleClass( "active" );
           
           var element =  $('.child:eq('+ layerIndex+' )');
           if((element).is(':visible')){
              element.hide();
             
           }else{
           	  element.show();
           }
	});

	//lock item
	$('.ui-layout-center').on('click' , '.lock' , function() {
           var layerIndex = $(this).parent().index();
           $(this).toggleClass( "active" );
           
           var element =  $('.child:eq('+ layerIndex+' )');
           if((element).hasClass('child')){
              console.log(1);
              // element.find(".ui-resizable-handle").hide();
              element.removeClass("child");
              
           }else{
           	  element.addClass('child')
           }
	});


	$('.add').one('click' , function( ) {
 	 
		  $('side-bar').find('menu').after(add);
		  foo();
	});

    
    //add text area 
    $('.ui-layout-center').on('click' , '.itemText' , function() {

		 if($('.itemSubText').length > 0 ){
           $('.itemSubText').remove();
           $(this).removeClass('selected_item');
        }else{
          $(this).addClass('selected_item');
		  $(this).after('<li class="addSubItem itemSubText"><span class="icon-format_color_text fsLayersMenuSubAdd"></span><span class="addItemSubText">title</span></li><li class="addSubItem itemSubText"><span class="icon-format_color_text fsLayersMenuSubAdd"></span><span class="addItemSubText">paragraph</span></li>');
        }
	});

	$('.ui-layout-center').on('click' , '.itemSubText' , function() {
        
     
        	$('.parent').append('<form method="post" action="dump.php" class="child layer"> <textarea name="content"></textarea> </form>');
		    $(".child").resizable({
	        /*aspectRatio:true,*/
			    minWidth: 2,
			    minHeight: 2,
			    // maxWidth: $(".parent").width(),
			    containment: "parent",
			    handles: "ne,nw,se,sw,n,w,e,s"
			});
			$(".child").draggable({
			    containment: "parent",
			    cursor: "move"
			});
		    $('layer-item:last-child').after(layer);
		    foo();	
	});



	 //add shapes
    $('.ui-layout-center').on('click' , '.itemShapes' , function() {

		 if($('.itemSubitemShapes').length > 0 ){
           $('.itemSubitemShapes').remove();
           $(this).removeClass('selected_item');
        }else{
          $(this).addClass('selected_item');
		  $(this).after('<li class="addSubItem itemSubitemShapes addBox"><span class="icon-format_color_itemShapes fsLayersMenuSubAdd"></span><span class="addItemSubitemShapes">box</span></li> <li class="addSubItem itemSubitemShapes addStrip"><span class="icon-format_color_itemShapes fsLayersMenuSubAdd"></span><span class="addItemSubitemShapes">strip</span></li> <li class="addSubItem itemSubitemShapes addLine"><span class="icon-format_color_itemShapes fsLayersMenuSubAdd"></span><span class="addItemSubitemShapes">line</span></li> <li class="addSubItem itemSubitemShapes addShapes"><span class="icon-format_color_itemShapes fsLayersMenuSubAdd"></span><span class="addItemSubitemShapes">shapes</span></li>'); 
		}
	});

	$('.ui-layout-center').on('click' , '.itemSubitemShapes' , function() {
            
         if($(this).hasClass('addBox')){
         	$('.parent').append('<div class="child layer" style="width:30%; height:200px;"> </div>');
		    $('layer-item:last-child').after(layer);
		    foo();	
         }

         if($(this).hasClass('addStrip')){
         	$('.parent').append('<div class="child layer" style="width:80%; height:50px;"> </div>');
		    $('layer-item:last-child').after(layer);
		    foo();	
         }

         if($(this).hasClass('addLine')){
         	$('.parent').append('<div class="child layer" style="width:40%; height:1px;"> </div>');
		    $('layer-item:last-child').after(layer);
		    foo();	
         }
            
        	
	});






    //basic*********************************************
    $.fn.getStyleObject = function(){
        var dom = this.get(0);
        var style;
        var returns = {};
        if(window.getComputedStyle){
            var camelize = function(a,b){
                return b.toUpperCase();
            }
            style = window.getComputedStyle(dom, null);
            for(var i=0;i<style.length;i++){
                var prop = style[i];
                var camel = prop.replace(/\-([a-z])/g, camelize);
                var val = style.getPropertyValue(prop);
                returns[camel] = val;
            }
            return returns;
        }
        if(dom.currentStyle){
            style = dom.currentStyle;
            for(var prop in style){
                returns[prop] = style[prop];
            }
            return returns;
        }
        return this.css();
    }

    $('.ui-layout-center').on('mousemove' , '#drow' , function() {
	    
	    var item = $('#drow').find('.selected_div');
	    if(item.length){
		    var style = item.getStyleObject();
		    console.log(style);
            
            //get element with by precent
   //          var width = style.width;
			// var parentWidth = item.offsetParent().width();
			// var percent = 100*width/parentWidth;   
		  
            // console.log(percent);
            $("#canvas").ImageColorPicker({
				afterColorSelected: function(event, color){
				 $(item).css("background" , color); 
				}
			});


		    $('.inputwidth').text(style.width);
		    $('.inputheight').text(style.height);
		    $('.inputfillOpacity').text(style.fillOpacity);

		    
		    $('.inputbsckgroundColor').text(style.backgroundColor);
		    $('.inputbsckgroundImage').text(style.height);
		    $('.inputbackgroundSize').text(style.backgroundSize);
		    $('.inputbackgroundRepeat').text(style.backgroundRepeat);

	    }

    });



    $('.ui-layout-center').on('click' , ".basic , .border"  , function() {
       var className = this.className;
       $("panel[name='" +className+ "']").show();
	});





    


	
});