// this function takes in an array and a number, then it removes the the number of elements starting at index 0 and returns the remaining array

function slasher(arr, howMany) {
    arr.splice(0, howMany);
	return arr;
}
