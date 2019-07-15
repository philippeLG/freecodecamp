/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  var a = arguments[0];
  
  if (Number.isFinite(a)) {
    if (arguments.length > 1) {
        var b = arguments[1];
        if (Number.isFinite(b)) {
          return a + b;
      }
    }
    else {
      return function(c) {
          if (Number.isFinite(c)) {
            return a + c;
          }
      };
    }
  }
}


addTogether(2)(3);
