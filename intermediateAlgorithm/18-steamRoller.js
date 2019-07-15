/* Flatten a nested array. You must account for varying levels of nesting. */
function steamrollArray(arr) {
  var newArr =[];
  
  var  extArray = function(arg) {
  
      if  (!Array.isArray(arg)) {
           newArr.push(arg);
           }
      else {
        arg.forEach(extArray);
        }
  };
  
  arr.forEach(extArray);
  return newArr;

}

steamrollArray([1, [2], [3, [[4]]]]);

