jQuery(document).ready(function($) {
	

   

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

	// function rotate() {
	//     var RAD2DEG = 180 / Math.PI;
	//     var dial = $(".child");
	//     dial.centerX = dial.offset().left + dial.width() / 2;
	//     dial.centerY = dial.offset().top + dial.height() / 2;
	//     var offset, dragging = false;
	//     dial.mousedown(function (e) {
	//         dragging = true;
	//         offset = Math.atan2(dial.centerY - e.pageY, e.pageX - dial.centerX);
	//     })
	//     $(document).mouseup(function () {
	//         dragging = false;
	//     })
	//     $(document).mousemove(function (e) {
	//         if (dragging) {
	//             var newOffset = Math.atan2(dial.centerY - e.pageY, e.pageX - dial.centerX);
	//             var r = (offset - newOffset) * RAD2DEG;
	//             dial.css('-webkit-transform', 'rotate(' + r + 'deg)');
	//             dial.css('-moz-transform', 'rotate(' + r + 'deg)');
	//             dial.css('-o-transform', 'rotate(' + r + 'deg)');
	//             dial.css('-ms-transform', 'rotate(' + r + 'deg)');
	//             var originanchor = '50% 50%';
	//             dial.css('-moz-transform-origin', originanchor);
	//             dial.css('-webkit-transform-origin', originanchor);
	//             dial.css('-o-transform-origin', originanchor);
	//             dial.css('-ms-transform-origin', originanchor);
	//         }
	//     })
	// };

	}
	/*als je klikt op knop div toevoegen */

	//style selected div with border layout 
	// $('.ui-layout-center').on('click', function() {	
	// 	var current = $('.ui-layout-center').find(event.target).addClass('selected_div');

	// 	//Remove all
 //   		$('.selected_div').removeClass('selected_div');
 //   		current.addClass("selected_div");
		
		
	// });


	var layer = "<layer-item class=''><icon class='eye active'></icon><icon class='lock'></icon><input spellcheck='false'></layer-item>";
	

    //pallate bottons


    //remove
 //    $('.remove').click(function() {
	//   $('layer-item')
	// });


    //add
	$('.add').click(function() {
	  
	  $('.parent').append('<div class="child layer"></div>');
	  $('layer-item:last-child').after(layer);
	  foo();
	  
	});

	

	
	$('.ui-layout-center').on('click' , 'layer-item' , function() {
		var layerIndex = $(this).index();
		console.log(layerIndex);
		//Remove all
   		$('.selected_div').removeClass('selected_div');
		$('.child:eq('+ layerIndex+' )').addClass('selected_div');
	});

    $('.layer').bind('click' ,function() {
    	alert(22);
    	$(this).each(function(index, el) {
	    	console.log(this.index);
	    	console.log(this.el);
	    });
    });

    


	//*********************************plate start************************

     // $('body').on('click', function(event) {
     // 	event.preventDefault();
     // 	var box =  $('.child');

     // 	box.each(function() {
     // 		var boxHeight = $(this).height();
     // 	    console.log(boxHeight);

     // 	    $(this).find(".boxHeight").remove();
     // 	    $(this).append("<div class='boxHeight'>" + boxHeight +"</>");
     // 	});
     	
     	
     // });
	
	
});