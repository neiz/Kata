// Removing a Number from Array 
/*     
Begin with an array of n integers in no particular order.  Remove one of these.  Which integer was removed?
*/



//JavaScript

/*Instead of sorting, it seemed more efficient for me to get an initial count, 
and then a count once an integer was removed.  The difference between the sums
leaves the removed integer.  This executed faster as n got large.
*/
    var n = 1000;
//Initialize array
    for (var array = [], count = 0; count <= n; count++) {
        array[count] = count;
    }

//Randomize
    array.sort(function randomize() {
        return (Math.round(Math.random()) - 0.5);
    });

//Get Initial Count
    var sum = 0;
    var count = 0;
    while (count < array.length) {
        sum += array[count];
        count++;
    }

//Remove a random integer
    var removalInt = Math.floor(Math.random() * array.length);
    array.splice(removalInt, 1);

//Get new sum
    var newSum = 0;
    var count = 0;
    while (count < array.length) {
        newSum += array[count];
        count++;
    }

//Output solution
    console.log(sum - newSum);