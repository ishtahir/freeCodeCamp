function repeatStringNumTimes(str, num) {
	if (num > 0) {
		var newStr = "";
		for (var i = 0; i < num; i++) {
			newStr += str;
		}
		console.log(newStr);
		return newStr;
	}
	else {
		return "";
	}
}
