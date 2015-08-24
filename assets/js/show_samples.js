function showSamples(type) {
	$(".webDev").hide();
	$(".psill").hide();
	$(".handD").hide();
	$(".mobile").hide();
	$(".FCPX").hide();
    switch(type) {
	    case "webDev":
	    	$(".webDev").show();
	        break;	        
	    case "psill":
			$(".psill").show();
	        break;	 
	    case "FCPX":
	    	$(".FCPX").show();
	        break;	 
	    case "handD":
	    	$(".handD").show();
	        break;	 
	    case "mobile":
	    	$(".mobile").show();
	        break;	 
	    case "all":
			$(".webDev").show();
			$(".psill").show();
			$(".handD").show();
			$(".FCPX").show();
			$(".mobile").show();
	        break;	 
    }
}