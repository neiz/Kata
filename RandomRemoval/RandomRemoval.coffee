#Removing a Number from Array 
     
#Begin with an array of n integers in no particular order.  Remove one of these.  Which integer was removed?


#Instead of sorting, it seemed more efficient for me to get an initial count, 
#and then a count once an integer was removed.  The difference between the sums
#leaves the removed integer.  This executed faster as n got large.
#
## CoffeeScript

#Prototype a sum() method
Array::sum = ->
  if this.length > 0
    this.reduce (x, y) -> x + y
  else
    0

#Prototype a .shuffle() method
Array::shuffle = -> @sort -> 0.5 - Math.random()

#Define the function
RandomRemoval = (n=1000) ->
	#Define & Shuffle array
	randomArray = [1..n].shuffle()

	#Sum array
	sum = randomArray.sum()

	#Remove random integer
	randomArray.splice(Math.floor(Math.random() * randomArray.length), 1)

	#Sum new array
	newSum = randomArray.sum()

	#Return result
	sum - newSum