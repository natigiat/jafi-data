jQuery(document).ready(function($) {
	if($('.searchTemplates').get(0)){
	
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