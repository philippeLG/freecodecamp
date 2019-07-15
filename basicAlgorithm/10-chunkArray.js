function chunkArrayInGroups(arr, size) {
  newArr = [];
  var i = 0;
  while(i + size < arr.length) {
    newArr.push(arr.slice(i,i + size));
    i = i + size;
  }
  newArr.push(arr.slice(i,i + size));

  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

