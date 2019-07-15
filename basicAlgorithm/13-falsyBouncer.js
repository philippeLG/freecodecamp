function bouncer(arr) {
  
  var newArr = arr.filter(function filter(item) {
    if (item== undefined || item == false || !item || item == 0 || item == NaN || item == "") {
      return false;
    } 
    else {
      return true;
    }});
    return newArr;
}
                             


bouncer([false, null, 0, NaN, undefined, ""]);

