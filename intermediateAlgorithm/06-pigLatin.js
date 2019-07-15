/*Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  
  var firstChar = str.charAt(0);
  var secondChar = str.charAt(1);
  var newStr = str;

  // If a word begins with a vowel you just add "way" to the end
  if (isVowel(firstChar)) {
    newStr = str + 'way';
  }
  // takes the first consonant cluster of an English word, moves it to the end of the word and suffixes an "ay".
  else {
    if (isVowel(secondChar)) {
      newStr = str.substr(1,str.length - 1) + firstChar + 'ay'; 
    }
    // takes the first consonant of an English word, moves it to the end of the word and suffixes an "ay".
    else {
      newStr = str.substr(2,str.length - 2) + firstChar + secondChar + 'ay'; 
    }
  }
  
  return newStr;
}

function isVowel(c) {
  return (/^[aeiou]$/i).test(c);
}

translatePigLatin("california");
//translatePigLatin("consonant");
//translatePigLatin("algorithm");
