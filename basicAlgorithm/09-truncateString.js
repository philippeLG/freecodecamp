function truncateString(str, num) {
  if (num < 3) {
    return str.slice(0,num) + '...';
  }
  if (str.length > num) {
    return str.slice(0,num - 3) + '...';
  }
  else {
    return str;
  }
}

truncateString("A-", 1);
