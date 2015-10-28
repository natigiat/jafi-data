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

    // manage start***********************************************************
    $(".manage7,.manage6,.manage3,.manage2").hide();   
    

    $('.box.nav').on('click', '.startM1', function(event) {
    	$(".manage7,.manage6").hide(1200); 
    	$(".manage1").show(1200);     
    	/* Act on the event */
    }); 

   $('.box.nav').on('click', '.startM2', function(event) {
        $(".manage1,.manage7,.manage6,.manage3").hide(1200); 
        $(".manage2").show(1200);     
        /* Act on the event */
    });


    $('.box.nav').on('click', '.startM3', function(event) {
        $(".manage1,.manage7, .manage6").hide(1200); 
        $(".manage3").show(1200);     
        /* Act on the event */
    });

    $('.box.nav').on('click', '.startM6', function(event) {
    	$(".manage1,.manage7,.manage3").hide(1200); 
    	$(".manage6").show(1200);     
    	/* Act on the event */
    }); 


    $('.box.nav').on('click', '.startM7', function(event) {
    	$(".manage1,.manage6").hide(1200); 
    	$(".manage7").show(1200);     
    	/* Act on the event */
    }); 




	
});