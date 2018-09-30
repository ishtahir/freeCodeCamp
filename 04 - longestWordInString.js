// this function accepts a string and the length of the longest word in the string

function findLongestWord(str) {
  const strArr = str.split(' ');
  const lengthArr = [];

  strArr.forEach(word => lengthArr.push(word.length));
  return Math.max(...lengthArr);
}
