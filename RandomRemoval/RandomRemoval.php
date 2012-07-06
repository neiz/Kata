<?php
// Removing a Number from Array 
/*     
Begin with an array of n integers in no particular order.  Remove one of these.  Which integer was removed?
*/

/*Instead of sorting, it seemed more efficient for me to get an initial count, 
and then a count once an integer was removed.  The difference between the sums
leaves the removed integer.  This executed faster as n got large.
*/

// Wrapped in a function for JSLitmus purposes

function RandomRemoval($n) {

    //Initialize array
    $array = array();
    for ($count = 0; $count <= $n; $count++) {
        $array[$count] = $count;
    }

    //Get Initial Count
    $sum = array_sum($array);

    //Randomize
    shuffle($array);

    //Remove a random integer
    unset($array[rand(0, count($array))]);

    //Get new sum
    $newSum = array_sum($array);

    //Output solution
    echo $sum - $newSum;
}
?>