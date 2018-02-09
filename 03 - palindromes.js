function palindrome(str) {
	var strArray = [];
	var newStr = str.replace(/\s+/g, ' ').replace(/[^a-zA-Z-0-9]/g, '').toLowerCase();
    newStr = newStr.replace(/-/g, '');
	for (var i = 0; i < newStr.length; i++) {
		strArray.push(newStr[i]);
	}
	var reverseArr = [];
	for (var k = strArray.length - 1; k >= 0; k--) {
		reverseArr.push(strArray[k]);
	}
	console.log(strArray);
	console.log(reverseArr);
	var equality = false;
	for (var j = 0; j < strArray.length; j++) {
		if (strArray[j] === reverseArr[j]) {
			equality = true;
		}
		else {
			equality = false;
            break;
		}
	}
	if (equality) {
		return true;
	}
	else {
		return false;
	}
}
