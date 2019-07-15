/* Return a new array that transforms the element's average altitude into their orbital periods.
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr =[];
  
  // oPeriod = 2 * PI * sqtr((earthRadius + avgAlt)3 / GM)
  var oPeriod = 0;
  
  for ( var elt in arr) {
    oPeriod = 2 * Math.PI * Math.sqrt((Math.pow(earthRadius + arr[elt].avgAlt,3) / GM));
    arr[elt].orbitalPeriod = Math.round(oPeriod); 
    delete arr[elt].avgAlt;
    newArr.push(arr[elt]);  
  }
  
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

