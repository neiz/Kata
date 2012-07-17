//fizzbuzz Kata  
//if i is a multiple of 3 print "fizz"
//else if i is a multiple of 5 print "buzz"
//else if i is a multiple of 3 and a multiple of 5 print "fizzbuzz"
//else print i

//C# Implementation


using System;

namespace Kata
{
    class fizzbuzz
    {
        static void Main(string[] args)
        {
        for (int count = 1; count <= 100; count++)
        {
            if (count % 5 == 0 && count % 3 == 0)
            {
                Console.WriteLine("fizzbuzz");
            }
            else if (count % 5 == 0)
            {
                Console.WriteLine("buzz");
            }
            else if (count % 3 == 0)
            {
                Console.WriteLine("fizz");
            }
            Console.WriteLine(count);
        }
        Console.ReadLine();
	    }
    }
}