// given an array the function returns a new array with all unique values, removing all duplicates

const arr1 = [7,9,7,9,1,2,3,1,4,5,2,4,5,6,8];

function removeDuplicates(arr) {
	const myArr = [];
	arr.forEach(num => {
		if (!myArr.includes(num)) {
			myArr.push(num);
		}
	});
	return myArr;
}

removeDuplicates(arr1);
