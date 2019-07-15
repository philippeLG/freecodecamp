function findLongestWord(str) {
  wordList = str.split(' ');
  var maxLength = 0;
  for (var i = 0; i < wordList.length; i++) {
      if (wordList[i].length > maxLength) {
      maxLength = wordList[i].length;
    }
  }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
