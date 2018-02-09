// this function accepts a string and the length of the longest word in the string

function findLongestWord(str) {
  var strArr = str.split(" ");
  var lengthArr = [];

  for (var i = 0; i < strArr.length; i++) {
      lengthArr.push(strArr[i].length);
  }
  return Math.max.apply(null, lengthArr);
}
