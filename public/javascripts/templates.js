jQuery(document).ready(function($) {
	if($('.searchTemplates').get(0)){
	
		//icheck for checkboxes
		$('input').iCheck({
		    checkboxClass: 'icheckbox_square',
		    radioClass: 'iradio_square',
		    increaseArea: '20%' // optional
		});

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