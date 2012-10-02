using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

// Binary Search 
/*     
Arguments are an array of numbers to sort through, and a value which we want to find.
Assumes array is pre-sorted before entering function.
*/

//C# Implementation

namespace Kata
{
    class BinarySearch
    {
        static void Main(string[] args)
        {
            int needle = 211;
            int[] haystack = {0, 1, 4, 5, 6, 7, 8, 9, 12, 26, 45, 67, 78, 90, 98, 123, 211, 234, 456, 769, 865, 2345, 3215, 14345, 24324};

            Console.WriteLine(Iterative(needle, haystack));
            Console.ReadLine();
        }

        static public int Iterative(int needle, int[] haystack)
        {
            int minValue = 0;
            int maxValue = haystack.Length;

            while (minValue <= maxValue)
            {
                var mid = (int)Math.Round((maxValue + minValue) / 2d, 0);

                if (haystack[mid] < needle)
                {
                    minValue = mid + 1;
                }
                else if (haystack[mid] > needle)
                {
                    maxValue = mid - 1;
                }
                else
                {
                    return mid;
                }
            }
            return -1;
        }
    }
}