jQuery(document).ready(function($) {
	if($('.account').get(0)){
	  
	  $('.creteNewProgect').hover(function() {
	  	$(this).css('background-color', '#ecf8fe');
	  }, function() {
	  	$(this).css('background-color', '#F8F8F8');
	  });

	  //filter by progect name
	  var options = {
		  valueNames: [ 'name', 'filter']
      }
	  var userList = new List('users', options);

      var searchFilter = $('.searchFilter');
	  $('.searchPlace').html(searchFilter);
	  
	}


	
});