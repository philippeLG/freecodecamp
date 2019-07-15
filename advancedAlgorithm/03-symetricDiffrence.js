/*Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

function sym(args) {
  
  // convert argument into array of arrays 
  var arrs = Array.from(arguments);
   
  // search diffrences 
  var newArr = arrs.reduce(function(a, b) {
        return b.filter(function(i) {
            return a.indexOf(i) === -1;
        }).concat(a.filter(function(i) {
            return b.indexOf(i) === -1;
        }));
    });
  
  // filter uniq
  var uniq = newArr.filter(function(elt,i,a) {
         return (i==a.indexOf(elt));
     });
 
  return uniq;


}

//sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
