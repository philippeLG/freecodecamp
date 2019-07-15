function getIndexToIns(arr, num) {
  // sort numbers cf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  arr.sort(function compareNumbers(a, b) {
    return a - b;
  });
  
  for (var i = 0; i < arr.length; i++ ) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
  
}
getIndexToIns([5, 3, 20, 3], 5);
//getIndexToIns([2, 5, 10], 15);
