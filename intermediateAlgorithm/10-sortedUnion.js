/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.*/

function uniteUnique(arr) {
 
  // convert argument into array of arrays (otherwise 1rst array taken)
  var args = Array.from(arguments);
  
  // concat in one array
  var concat = args.reduce(
  function(a, b) {
    return a.concat(b);
    },
    []
  );
  
  // filter uniq
  var uniq = concat.filter(function(elt,i,a) {
        return (i==a.indexOf(elt));
    });
  
  return uniq;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
