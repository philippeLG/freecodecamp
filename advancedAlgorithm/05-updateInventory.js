/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. */

function updateInventory(arr1, arr2) {

    var index;
  
    function searchIndex(name) {
      for (var i=0; i<arr1.length; i++) {
        if (arr1[i][1] === name) return i;
      }
      return undefined;
    }

    for (var j = 0; j < arr2.length; j++) {
        
      index = searchIndex(arr2[j][1]);

        if (index === undefined) {
            arr1.push(arr2[j]);
        } else {
            arr1[index][0] += arr2[j][0];
        }

    }

    // Sort alphabetically
    arr1.sort(function (a, b) {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        return 0;
    });

    return arr1;
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

