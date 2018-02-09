function findLongestWord(str) {
  var strArr = str.split(" ");
  var lengthArr = [];

  for (var i = 0; i < strArr.length; i++) {
      lengthArr.push(strArr[i].length);
  }
  return Math.max.apply(null, lengthArr);
}
