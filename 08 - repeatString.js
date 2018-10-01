// repeat a given string num times, return an empty string if num is not a positive number, do not use built in .repeat() method

function repeatStringNumTimes(str, num) {
	if (num > 0) {
		let newStr = '';
		for (let i = 0; i < num; i++) {
			newStr += str;
		}
		return newStr;
	}
	else {
		return '';
	}
}
