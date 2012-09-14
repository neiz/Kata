var StringCalc = {
    Add : function(exp) {
    	result = 0;
    	var fragments = exp.split(/,|\n/g);
    		for (var i=0; i<fragments.length; i++) {
    		result += parseInt(fragments[i] || 0);
    		}
    			return result;
    }
};