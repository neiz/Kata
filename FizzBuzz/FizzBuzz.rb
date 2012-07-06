#FizzBuzz Kata  
#if i is a multiple of 3 print "fizz"
#else if i is a multiple of 5 print "buzz"
#else if i is a multiple of 3 and a multiple of 5 print "fizzbuzz"
#else print i

def fizzbuzz(maxNumber)

	for count in 1..maxNumber
		if count % 15 == 0 then
			print "fizzbuzz"
		elsif count % 3 == 0 then
			print "fizz"
		elsif count % 5 == 0 then
			print "buzz"
		else
			print count
		end
		print "\n"
	end
end


puts fizzbuzz(1000)
