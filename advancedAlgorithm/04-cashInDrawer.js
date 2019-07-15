/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

function checkCashRegister(price, cash, cid) {
  var change = [];
  var due = cash - price;
  var units = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
  var val = 0.00;
  
  
  var cashInDrawer = 0.00;
  cid.forEach(function(curr) { cashInDrawer += curr[1]; });
  
  if (due > cashInDrawer) return 'Insufficient Funds';
  
  if (due == cashInDrawer) return 'Closed';
  
  for (var i = cid.length -1; i >= 0; i--) {
    val = 0.00;
    while (cid[i][1] > 0 && due >= units[i]) {
        due = due.toFixed(2);
        due -= units[i];
        cid[i][1] -= units[i];
        val += units[i];
      }
      if (val)
        change.push([cid[i][0], Number(val.toFixed(2))]);
    }
  
  if (val < due) return 'Insufficient Funds';
  
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
