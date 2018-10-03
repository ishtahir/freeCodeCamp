// this function takes in an array with 2 elements, returns true if the first element contains all the letters of the second element

function mutation(arr) {
	let check = false;
	const newArr = [];
	newArr.push(arr[0].toLowerCase());
	newArr.push(arr[1].toLowerCase());
	for (var i = 0; i < newArr[1].length; i++) {
		if (newArr[0].includes(newArr[1][i])) {
			check = true;
		}
		else {
			check = false;
			return check;
		}
	}
    return check;
}
