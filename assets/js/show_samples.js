function showSamples(type) {
	$(".recent").hide();
	$(".early").hide();
	$(".midwestern").hide();
	$(".california").hide();
    switch(type) {
	    case "recent":
	    	$(".recent").show();
	        break;	        
	    case "early":
			$(".early").show();
	        break;	 
	    case "midwestern":
	    	$(".midwestern").show();
	        break;	 
	    case "california":
	    	$(".california").show();
	        break;	 
	    case "all":
			$(".recent").show();
			$(".early").show();
			$(".midwestern").show();
			$(".california").show();
	        break;	 
    }
}