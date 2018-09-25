// this function accepts a string and then capitalizes the first letter of every word in the string

titleCase = str => {
  const splitStr = str.toLowerCase().split(' ');
  splitStr.forEach((val, i) => {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1);
  });
  return splitStr.join(' ');
}
