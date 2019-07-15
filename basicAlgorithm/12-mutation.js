function mutation(arr) {
  str1 = arr[0].toLowerCase();
  str2 = arr[1].toLowerCase();
  for (var i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) < 0) {
        return false;
        }
  }
  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

