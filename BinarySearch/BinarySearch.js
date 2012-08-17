// Binary Search 
/*     
Arguments are an array of numbers to sort through, and a value which we want to find.
Assumes array is pre-sorted before entering function.
*/

// Wrapped in a function for JSLitmus purposes


// TEST CODE:

var haystack = [0, 1, 4, 5, 6, 7, 8, 9, 12, 26, 45, 67, 78, 90, 98, 123, 211, 234, 456, 769, 865, 2345, 3215, 14345, 24324];
var needle = 211;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Iterative implementation

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var iterative = function (haystack, needle) {

    minValue = 0;                   //Initialize min/max values
    maxValue = haystack.length;

    while (minValue <= maxValue)
    {
        i = Math.floor((minValue + maxValue) / 2); //Calculate i as midpoint
        if (haystack[i] < needle) {
            minValue = i + 1;
        }
        else if (haystack[i] > needle) {
            maxValue = i - 1;
        }
        else
        {
            return i; //Found
        }
    }
    return -1; //Failure
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Recursive implementation

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var recursive = function (needle, low, high, haystack) {

    var mid; //Initialize mid

    if (high < low)
    {
        return null; //Failure
    }
    else
    {
        mid = Math.floor((low + high) / 2); //Get mid-point
    }

        if (needle < haystack[mid])
        {
            return recursive(needle, low, mid - 1, haystack); //Reiterate function with mid=high
        }
        else if (needle > haystack[mid])
        {
            return recursive(needle, mid + 1, high, haystack); //Reiterate itself; manipulate low value
        }
        else
        {
            return mid; //Success
        }
        return null; //Failure
}