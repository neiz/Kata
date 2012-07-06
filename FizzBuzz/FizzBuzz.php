<?php
// FizzBuzz Kata 
/*   
if i is a multiple of 3 print "fizz"
else if i is a multiple of 5 print "buzz"
else if i is a multiple of 3 and a multiple of 5 print "fizzbuzz"
else print i
*/

// Wrapped in a function for JSLitmus purposes

function fizzbuzz($maxNumber) {
//Iterate through integers and apply calculations
    for ($count = 1; $count <= $maxNumber; $count++) {
        if ($count % 15 === 0) {
            echo "fizzbuzz <br/>";
        }
        elseif ($count % 3 === 0) {
            echo "fizz <br/>";
        }
        elseif ($count % 5 === 0) {
            echo "buzz <br/>";
        }
        else {
            echo $count."<br/>";
        }
    }
}
?>
