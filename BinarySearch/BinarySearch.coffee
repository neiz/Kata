# Binary Search 
#     
#Arguments are an array of numbers to sort through, and a value which we want to find.
#Assumes array is pre-sorted before entering function.


#Iterative #mplementation

iterative = (needle, haystack) ->
	minValue = 0
	maxValue = haystack.length

	(mid = Math.floor((minValue+maxValue)/2)
	if haystack[mid] < needle then minValue = mid+1
	else if haystack[mid] > needle then maxValue = mid-1
	else return mid) while minValue <= maxValue

	null


#Recursive Implementation

recursive = (needle, haystack, low, high) ->

	if high < low then return null
	else mid = Math.floor((low + high) / 2)

	if needle < haystack[mid] then recursive(needle, haystack, low, mid - 1)
	else if needle > haystack[mid] then recursive(needle, haystack, mid + 1, high)
	else return mid