function rot13(str) { // LBH QVQ VG!
  var newStr = "";
  
  for (var i = 0;i < str.length;i++) {
    num = str.charCodeAt(i);
     
    if (num >= 65 && num <= 77) {
      num +=13;
    } 
    else { 
      if (num > 77 && num <= 90) {
        num = 65 + (num - 78);
      }
    }
      
    newStr += String.fromCharCode(num);
    
  }
  return newStr;
}

// Change the inputs below to test
//rot13("SERR+PBQR+PNZC");
rot13("SERR CVMMN!");
