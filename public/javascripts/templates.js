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
			   
			

		       $('.filterStart').html(data);


		    });
		  
		});



        $('.filters').on('click' ,function(){
        
        	var len = $('.checked').find('input').val;
		    console.log(len);

        });
		

		$('#input-1').iCheck('check');

	}
	
});
 

       



 
