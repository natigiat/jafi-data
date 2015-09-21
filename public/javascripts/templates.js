jQuery(document).ready(function($) {
	if($('.searchTemplates').get(0)){
	
		//icheck for checkboxes
		$('input').iCheck({
		     checkboxClass: 'icheckbox_flat-red',
             radioClass: 'iradio_flat-red'
		  });

		$('input').on('ifChecked', function(event){
		  
		  	 var value = event.target.value;
		  	 console.log(value);
		  	 $('#filter1').iCheck('uncheck');
		  
		});

		$('#filter1').iCheck('check', function(){
		 
		});
        
        $('.filters').on('click' ,function(){
        
        	var len = $('.checked').find('input').val;
		    console.log(len);

        });
		
        
        
        
        


  	//     $("input[type='checkbox']").change(function() {
	  // 	    console.log('filterArray');
	  // 	    $("icheckbox_flat-red").each(function(){
			// 	 if ($(this).hasClass('checked')){
			// 	 	var valk = $(this).first().val;
			// 	 	filterArray.push(valk );
			// 	 }
				 
			// });
			// console.log(filterArray);
   //      });
		
		

		$('#input-1, #input-3').iCheck('check');

		$('.progectLink').on('click',  function() {
			var progectId = $(this).find('.pr').val();
			var eyesValue = $(this).find('.eyesValue').val();

			var parameters = { progectId: progectId , eyesValue : eyesValue} ;
			$.post( '/templates', parameters, function(data) {
		       alert(data);
		    });
		});
 


	}
	
});
 

       



 
   //      var filterValues = [];
   //      $( ".filters" ).on("click" , function() {
	        
	  //       $( ".labelFilters" ).each(function(  ) {
			//     var value = $( this ).parent('.smallCheck').find('.icheckbox_flat-red');
			//     console.log(value);
			    
			//     if(value.hasClass('checked')){
			//     	var filterVal = $(this).attr('value');
			//         filterValues.push(filterVal);
			//     }

			    
			    
			// });

			// console.log(filterValues);

   //      });

       


