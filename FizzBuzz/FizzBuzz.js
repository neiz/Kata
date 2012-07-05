// FizzBuzz Kata 
/*     
if i is a multiple of 3 print "fizz"
else if i is a multiple of 5 print "buzz"
else if i is a multiple of 3 and a multiple of 5 print "fizzbuzz"
else print i
*/

// Wrapped in a function for JSLitmus purposes

function fizzbuzz(maxNumber) {

    if (!maxNumber) {
    var maxNumber = 1000;
    }

    //Iterate through integers and apply calculations
    for (var count = 1; count <= maxNumber; count++) {
        if (count % 15 == 0) {
            console.log("fizzbuzz");
        }
        else if (count % 3 == 0) {
            console.log("fizz");
        }
        else if (count % 5 == 0) {
            console.log("buzz");
        }
        else {
            console.log(count);
        }
    }
}
