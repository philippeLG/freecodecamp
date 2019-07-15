function factorialize(num) {
  var factNum = 1;
  for (var i = 1; i <= num; i++) {
        factNum = factNum * i;
  }
  return factNum;
}

factorialize(5);
