# Binary Search 
#     
#Arguments are an array of numbers to sort through, and a value which we want to find.
#Assumes array is pre-sorted before entering function.
#

#Iterative implementation


iterative = (needle, haystack) ->
	minValue = 0
	maxValue = haystack.length-1

	(mid = Math.floor(minValue+maxValue/2)
	if haystack[mid] < needle then minValue = mid+1
	if haystack[mid] > needle then maxValue = mid-1
	else return mid)while minValue <= maxValue

	return -1

