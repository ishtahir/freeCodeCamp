// this function accepts a string and a number, it truncates the string to the number of characters it is provided

function truncateString(str, num) {
  if (num < str.length) {
    str = `${str.slice(0, num)}...`;
  }
  return str;
}
