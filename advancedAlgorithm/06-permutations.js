/*Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations 
(aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating. */

function permAlone(str) {
    
  // recherche liste des permuations
  // https://initjs.org/all-permutations-of-a-set-f1be174c79f8
  function permut(str) {
  
    var newStr =[];
    
    if (str.length === 1) {
        newStr.push(str);
      return newStr;
    }
  
    for (var i=0; i<str.length; i++) {
      var char = str[i];
    
      var suite = str.substring(0, i) + str.substring(i + 1);
    
      var permutations = permut(suite);
    
      for (var j = 0; j < permutations.length; j++) {
        newStr.push(char + permutations[j]);
      }
    }
    return newStr;
  }
  
  var newStr = permut(str);
  
  // regex match repeated consecutive characters.
  var regex = /(.)\1+/g;
  
  // filter elements matching regex 
  var uniq = newStr.filter(function(elt) {
     if (elt.match(regex) == null) {return elt;}
      });
  return uniq.length;
}

permAlone('aab');
