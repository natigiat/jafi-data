jQuery(document).ready(function($) {
	if($('.index').get(0)){
	  
	  $('.slider').slick({
		  infinite: true,
		  autoplay: true,
  		  autoplaySpeed: 2000,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear',
		  dots: true,
		  fade: true
	  });

	 

	}
	
});