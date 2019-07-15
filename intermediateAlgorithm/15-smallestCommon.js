/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  // search min and max 
  var min=0;
  var max=0;
  if(arr[0] > arr[1]) 
    {min = arr[1]; max = arr[0];}
  else  
    {min = arr[0]; max = arr[1];}
    
  // search common multiple
  var multiple = max;
  var ppcm = 0;
  while (ppcm === 0) {
		for (i = min; i <= max; i++ ){
			if (multiple % i !== 0 ) { break; }
			if (i == max) { ppcm = multiple; }
		}
		multiple += max;
	}
  
  return ppcm;
}


smallestCommons([1,5]);

