/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
  //var newArr = [];
  var newArr = arr1.filter(function(elt){
      return arr2.indexOf(elt) === -1;
    }).concat(arr2.filter(function(elt){
      return arr1.indexOf(elt) === -1;
    }));
  
  // Same, same; but different.
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
