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

    if (!$n) {
        $n = 1000;
    }

    //Initialize array
    $array = array();
    for ($count = 1; $count <= $n; $count++) {
        $array[$count] = $count;
    }

    //Randomize
    shuffle($array);
    print_r($array);
    //Get Initial Count
    $sum = 0;
    $count = 1;
    while ($count < count($array)) {
        $sum += $array[$count];
        $count++;
    }

    //Remove a random integer
    unset($array[rand(1, count($array))]);

    //Get new sum
    $newSum = 0;
    $count = 1;
    while ($count < count($array)) {
        $newSum += $array[$count];
        $count++;
    }

    //Output solution
    echo $sum - $newSum;
}

RandomRemoval(1000)
?>