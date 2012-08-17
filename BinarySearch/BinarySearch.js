// Binary Search 
/*     
Arguments are an array of numbers to sort through, and a value which we want to find.
Assumes array is pre-sorted before entering function.
*/

// Wrapped in a function for JSLitmus purposes

// Iterative implementation

var iterative = function(haystack, needle) {
    //Initialize min/max values
    minValue = 0;
    maxValue = haystack.length;
    while (minValue <= maxValue) {
        //Calculate i as midpoint
        i = Math.floor((minValue + maxValue) / 2);
        if (haystack[i] < needle) {
            minValue = i + 1;
        }
        else if (haystack[i] > needle) {
            maxValue = i - 1;
        }
        else {
            //Found
            return i;
        }
        }
    //Error
    return -1;
}
var haystack = [0, 1, 4, 5, 6, 7, 8, 9, 12, 26, 45, 67, 78, 90, 98, 123, 211, 234, 456, 769, 865, 2345, 3215, 14345, 24324];
var needle = 211;
iterative(haystack, needle);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Recursive implementation

var recursive = function (needle, low, high, haystack) {

    //Initialize variables
    var mid;

    if (high < low) {
        //Failure, not found
        return null;
    }
    else
    {
        mid = Math.floor((low + high) / 2);
    }
    //Loop through low-bound to high-bound
        //Get mid-point
        if (needle < haystack[mid])
        {
            //Reiterate function with mid=high
            return recursive(needle, low, mid-1, haystack);
        }
        else if (needle > haystack[mid]) {
            //Reiterate function with low being middle integer+1
            return recursive(needle, mid+1, high, haystack);
        }
        else
        {
            //Success
            return mid;
        }
    //Failure; should not have reached this point
    return null;
}

var haystack = [0, 1, 4, 5, 6, 7, 8, 9, 12, 26, 45, 67, 78, 90, 98, 123, 211, 234, 456, 769, 865, 2345, 3215, 14345, 24324];
var needle = 211;
recursive(needle, 0, haystack.length, haystack);