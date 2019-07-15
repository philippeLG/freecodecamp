/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  // positionne str dans alphabet
  var start = alphabet.indexOf(str.charAt(0));
  
  // recherche element manquant
  for (var i =0; i < str.length; i++) { 
      if (alphabet[start + i] != str[i]) {
        return alphabet[i];
      }
	}

  return undefined;
}

fearNotLetter("bcd");

