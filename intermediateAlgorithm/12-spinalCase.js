function spinalCase(str) {
  
  // remplace xxxMaj par 'xxxxMaj '
  var re = /([a-z])([A-Z])/g;
  var newStr = str.replace(re,'$1 $2');
  
  //remplace space ou _ par -
  re = /\s+|_+/g;
  newStr = newStr.replace(re, '-');
  
  return newStr.toLowerCase();
}

spinalCase('ThisIsSpinalTap');

