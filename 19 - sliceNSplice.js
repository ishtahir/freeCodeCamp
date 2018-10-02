// given two arrays and an index, use the array methods slice and splice to copy each element of the first array
// into the second array, in order, beginning at the index of the second array

function frankenSplice(arr1, arr2, index) {
  const newArr = arr2.slice();
  newArr.splice(index, 0, ...arr1);
  return newArr;
}
