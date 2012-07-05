// FizzBuzz Kata 
/*     
if i is a multiple of 3 print "Fizz"
else if i is a multiple of 5 print "Buzz"
else if i is a multiple of 3 and a multiple of 5 print "FizzBuzz"
else print i
*/



//JavaScript

var maxNumber = 100;

for (var count = 1; count <= maxNumber; count++)
{
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

