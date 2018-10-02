// this function takes in an array and a number
// then it removes that number of elements from the beginning and returns the remaining array

function slasher(arr, howMany) {
	const newArr = arr.slice();
	newArr.splice(0, howMany);
	return newArr;
}
