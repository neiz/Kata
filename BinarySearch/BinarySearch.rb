#Binary Search 
#     
#Arguments are an array of numbers to sort through, and a value which we want to find.
#Assumes array is pre-sorted before entering function.
#

# Iterative implementation

class Array
  def iterative(needle, haystack)
	#Initialize local vars
    min = 0 
    max = haystack.length - 1
    #Main loop
    while min <= max
	  #Calculate middle point
      i = (min + max) / 2
      case
		#When current int is larger than our search param 
        when haystack[i] > needle then max = i - 1
        #When current int is smaller than our search param
        when haystack[i] < needle then min = i + 1
        #Found
        else return i
      end
    end
    #Failed
    nil
  end
end
