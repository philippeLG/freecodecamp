/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  
  // test case
  var char = before.charAt(0);
  var newAfter = after;
  if (char == char.toUpperCase()) {
      newAfter = after.charAt(0).toUpperCase() + after.slice(1);
  }
  if (char == char.toLowerCase()) {
      newAfter = after.charAt(0).toLowerCase() + after.slice(1);
  }
  
  // prepare regexp
  var re = new RegExp(before,"ig");
  
  // replace
  var newStr = str.replace(re,newAfter);  
  
  return newStr;
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

