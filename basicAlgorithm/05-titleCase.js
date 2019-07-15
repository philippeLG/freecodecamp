function titleCase(str) {
  str = str.toLowerCase();
  wordList = str.split(' ');
  console.log(wordList);
  
  for (var i = 0; i < wordList.length; i++) {
      wordList[i] = wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1);
  }
  str = wordList.join(' ');
  return str;
}

titleCase("I'm a little tea pot");

