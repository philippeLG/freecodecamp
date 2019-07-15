function repeatStringNumTimes(str, num) {
  var strResult = '';
  for (var i = 0; i< num; i++) {
    strResult = strResult + str;
  }
  return strResult;
}

repeatStringNumTimes("abc", 3);
