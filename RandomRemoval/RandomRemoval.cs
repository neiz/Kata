using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

// Removing a Number from Array 
/*     
Begin with an array of n integers in no particular order.  Remove one of these.  Which integer was removed?
*/

/*Instead of sorting, it seemed more efficient for me to get an initial count, 
and then a count once an integer was removed.  The difference between the sums
leaves the removed integer.  This executed faster as n got large.
*/

namespace Kata
{
    class RandomRemoval
    {
        static void Main() //Main executing function
        {
            Console.WriteLine("Enter the number of total elements in the array:");
            string elements = Console.ReadLine(); //Gather input
            int arrayLength;
            if (int.TryParse(elements, out arrayLength))
            {
                int[] array = InitArray(arrayLength);
                int initSum = SumArray(array);
                int finalSum = SumArray(RemoveOneElement(array));

                int removedInt = initSum - finalSum;

                Console.WriteLine("The removed integer was: " + removedInt.ToString());
                Console.WriteLine("Press any key to exit.");
                Console.ReadKey();
            }
            else //Error checking incase input is not an int
            {
                Main(); 
            }
        }

        public static int[] InitArray(int arrayLength) //Initialize an array with n elements
        {
            int[] array = new int[arrayLength];
            for (int i = 0; i < arrayLength; i++)
            {
                array[i] = i;
            }
            return array;
        }

        public static int SumArray(int[] array) //Reusable, generic method to sum array with n elements
        {
            int total = 0;
            for (int i = 0; i < array.Length; i++)
            {
                total += array[i];
            }
            return total;
        }

        public static int[] RemoveOneElement(int[] array) //Convert array to a List, randomly remove an element, return as array
        {
            Random rnd = new Random();
            List<int> tempList = array.OfType<int>().ToList();
            int r = rnd.Next(tempList.Count);
            tempList.RemoveAt(r);

            return tempList.ToArray();
        }
    }

}
