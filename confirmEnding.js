function confirmEnding(str, target) {
	var newTarget = "";
	for (var i = (str.length - target.length); i < str.length; i++) {
		newTarget += str[i];
	}
	if (target === newTarget) {
		return true;
	}
	else {
		return false;
	}
}
