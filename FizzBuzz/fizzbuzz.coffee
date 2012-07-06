#FizzBuzz Kata  
#if i is a multiple of 3 print "fizz"
#else if i is a multiple of 5 print "buzz"
#else if i is a multiple of 3 and a multiple of 5 print "fizzbuzz"
#else print i

for count in [1..100]
	if count % 15 is 0
		console.log "fizzbuzz"
	else if count % 5 is 0
		console.log "buzz"
	else if count % 3 is 0
		console.log "fizz"
	else
		console.log count


