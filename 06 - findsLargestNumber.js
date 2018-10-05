// this function accepts a 2D array of four numbers in each inner array, then returns an array of the biggest number in each of the inner arrays

function largestOfFour(arr) {
	const bigNum = [];
	let largest = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > largest) {
				largest = arr[i][j];
			}
		}
		bigNum.push(largest);
        largest = 0;
	}
	return bigNum;
}
