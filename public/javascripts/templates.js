jQuery(document).ready(function($) {
	if($('.searchTemplates').get(0)){


		var infinite = new Waypoint.Infinite({
		  element: $('.filterStart')[0]
		})
	
		//icheck for checkboxes
		$('input').iCheck({
		     checkboxClass: 'icheckbox_flat-red',
             radioClass: 'iradio_flat-red'
		  });
        
        //####################### manage prev next buttons #############################
        //get url id
        var url      = window.location.href; 
		var pieces = url.split("/");
		var elementId = pieces[pieces.length - 1];
		var elementType = pieces[pieces.length - 2];



		console.log(elementType);
		if(elementType !== "elements"){
			$('.nextElement').attr("href" , "/elements/"+elementType+"/"+ (parseInt(elementId) + 1));
            $('.prevElement').attr("href" , "/elements/"+elementType+"/"+ (parseInt(elementId) -1));
		}else{
			$('.nextElement').attr("href" , "/elements/"+ (parseInt(elementId) + 1));
            $('.prevElement').attr("href" , "/elements/"+ (parseInt(elementId) -1));
		}

		if(elementId == "1"){
            $('.prevElement').remove();
            $('.nextElement').parent().removeClass( "col-sm-2 col-sm-offset-6" );
            $('.nextElement').parent().addClass('col-sm-4 col-sm-offset-4');
		}
		


		//####################### filters result in elements #############################
		$('.elements').find('input').on('ifChecked', function(event){
		  
		  	 var value = event.target.value;
		  	 console.log(value);
		  	 window.location.href = '/elements/'+value+"/"+1;
		  	 
		  	 event.preventDefault();		  
		});

		//####################### filters result in templetes #############################
		$('.elements').find('input').on('ifChecked', function(event){
		  
		  	 var value = event.target.value;
		  	 console.log(value);
		  	 window.location.href = '/elements/'+value+"/"+1;
		  	 
		  	 event.preventDefault();		  
		});


// <iframe src='/progect/element/"+data[i]._id +'/' +data[i].name +"' class='webform-frame' style='margin: 0 auto; transform-origin: top left;' allowtransparency='true' width='100%' height='220px' frameborder='0' scrolling='no' align='center'>"
// li.templateLi
//           div.col-sm-4.row.listProgect
//             div.text-center.col-sm-12progectName= val.name
//             div.col-sm-12
//               div(class="templatesWebsite")
//               div(class="iframe-wrap loaded")
//                 iframe(src="/progect/element/"+val._id +"/" +val.name class="webform-frame" style="margin: 0 auto; transform-origin: top left;" allowtransparency="true" width="100%" height="220px" frameborder="0" scrolling="no" align="center")
//             div.col-sm-12.ratingTemplates
//               div.col-sm-6
//                 p.templatesPrice Price : Free
//               div.col-sm-6.pull-right
//                  a(class="watch" name="watch")<i class="fa fa-eye"></i>
//                    span.eyesValue(val="3") 3
//                  a(class="single-stat comments")<i class="fa fa-heart-o"></i></i> 3
//             div.col-sm-12.temlatesButtons               
//                  a.btn.btn-primary.btn-sm.fixed-bottom.box-shadow--2dp.col-sm-6(href="/scanner/edit/#{userId}").progectLink= "Edit"
//                  a.btn.btn-success.btn-sm.fixed-bottom.box-shadow--4dp.col-sm-6.sec(href="/progect/element/"+val._id +"/" +val.name ).progectLinkView= "View"
            




        $('.filters').on('click' ,function(){
        
        	var len = $('.checked').find('input').val;
		    console.log(len);

        });
		

		$('#input-1').iCheck('check');

	}
	
});
 

       



 
