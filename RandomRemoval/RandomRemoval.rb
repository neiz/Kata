# Removing a Number from Array 
#     
#Begin with an array of n integers in no particular order.  Remove one of these.  Which integer was removed?
#
#Instead of sorting, it seemed more efficient for me to get an initial count, 
#and then a count once an integer was removed.  The difference between the sums
#leaves the removed integer.  This executed faster as n got large.
#
# Wrapped in a function for JSLitmus purposes

def RandomRemoval(n) 

    #Initialize array
	array=*(1..n)

    #Get Initial Count
    sum = array.inject(:+)

    #Randomize
    array.shuffle
    
    #Remove a random integer
    #array.sample >= 1.9
    array.delete_at(array.choice)
	
    #Get new sum
    newSum = array.inject(:+)

    #Output solution
    puts sum-newSum

end
