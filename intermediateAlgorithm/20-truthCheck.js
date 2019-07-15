/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).*/

function truthCheck(collection, pre) {
  
  var bool = true;
  
  collection.forEach(function(coll) {
    if (!coll[pre]) {bool = false;}
  });
  
  return bool;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

