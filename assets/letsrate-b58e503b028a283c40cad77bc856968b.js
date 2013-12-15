$.fn.raty.defaults.path = "/"; 
$.fn.raty.defaults.half_show = true;  
 
$(function(){ 
	$(".star").raty({			       
		score: function(){
			return $(this).attr('data-rating')				
		}, 
		number: function() {
			return $(this).attr('data-star-count')
		},
		click: function(score, evt) {
		   	$.post('/rate', 
				{
					score: score, 
					dimension: $(this).attr('data-dimension'),  
					id: $(this).attr('data-id'),
					klass: $(this).attr('data-classname')
				}, 
				function(data) {
			  		if(data) {
						alert('Successfully rated'); 
					}
			});
		}                        
	});           
});
