function palindrome(str) {
  // prepare string 
  str = str.toLowerCase();
  
  str = str.replace(/[^a-z0-9+]+/gi, '');
  
  
  var strReverse = str.split('').reverse().join('');
  if (str === strReverse) {
    return true;
  }
  else {
    return false;
  }
}



palindrome("eye");
