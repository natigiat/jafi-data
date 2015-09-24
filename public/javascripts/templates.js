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
		  	 
		  	 event.preventDefault();

            //start ajax filter
		  	var parameters = {filter : value};
			$.post( '/templates', parameters, function(data) {
			   
			
		       $('body').replaceWith(data);

		    });
		  
		});

		// $('#filter1').iCheck('check', function(){
		 
		// });
        
        $('.filters').on('click' ,function(){
        
        	var len = $('.checked').find('input').val;
		    console.log(len);

        });
		

		$('#input-1').iCheck('check');


		$('.progectLink').on('click',  function() {
			var progectId = $(this).find('.pr').val();
			var eyesValue = $(this).find('.eyesValue').val();

			var parameters = { progectId: progectId , eyesValue : eyesValue} ;
			$.post( '/templates', parameters, function(data) {
		       alert(data);
		    });
		});


		// //ajax result
		// $('.filters').click(function() {
			
		// });
		
 


	}
	
});
 

       



 
