<?php

// Binary Search 
/*     
Arguments are an array of numbers to sort through, and a value which we want to find.
Assumes array is pre-sorted before entering function.
*/

// Wrapped in a function for JSLitmus purposes

// Iterative implementation

function iterative($haystack, $needle) {
	//Built in
	return array_search($needle, $haystack);
}


// Recursive implementation

function recursive($needle, $haystack, $low, $high) {
    
    $mid = 0;

    if ($high < $low) {
        return null;
    }
    else {
        $mid = (round($low+$high)/2);
    }

        if ($needle < $haystack[$mid])
        {
            return recursive($needle, $haystack, $low, $mid - 1); //Reiterate function with mid=high
        }
        elseif ($needle > $haystack[$mid])
        {
            return recursive($needle, $haystack, $mid + 1, $high); //Reiterate itself; manipulate low value
        }
        else
        {
            return $mid; //Success
        }
        return null; //Failure

}
?>