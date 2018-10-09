// this function takes in an array and a number, it splits the array into a 2D array with each inner array the size
// of the number and then it returns the 2D array

function chunkArrayInGroups(arr, size) {
	const newArr = [];
	const initLength = arr.length / size;
	for (var i = 0; i < initLength; i++) {
		newArr.push(arr.slice(0, size));
		arr.splice(0, size);
	}
	return newArr;
}
