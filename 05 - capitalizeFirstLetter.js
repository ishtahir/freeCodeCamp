function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  splitStr.forEach(function(val, i) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1);
  });
  var newStr = splitStr.join(" ");
  return newStr;
}
