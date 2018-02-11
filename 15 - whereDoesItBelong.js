// this function takes in an array and a number, the array gets sorted from small to big and it returns the index of where the number belongs in a sorted array

function getIndexToIns(arr, num) {
	arr.sort(function(a, b) {
		return a - b;
	});
	for (var i = 0; i < arr.length; i++) {
		if (num <= arr[i]) {
			return i;
		}
	}
	return arr.length;
}
