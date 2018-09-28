// this function takes in an array and a number
// then it removes that number of elements from the beginning and returns the remaining array

slasher = (arr, howMany) => {
    arr.splice(0, howMany);
	return arr;
}
