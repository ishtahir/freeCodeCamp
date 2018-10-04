// this function takes in an array and a number, the array gets sorted in ascending order
// it returns the index of the number in the array, or the length of the array

function getIndexToIns(arr, num) {
	arr.sort((a, b) => a - b);
	for (var i = 0; i < arr.length; i++) {
		if (num <= arr[i]) {
			return i;
		}
	}
	return arr.length;
}
