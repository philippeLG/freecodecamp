function destroyer(arr) {
  var args = Array.from(arguments);
    
  var newArr = args[0].filter(function filter(item) {
    return args.indexOf(item) < 0;
  });
  return newArr;
   
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

