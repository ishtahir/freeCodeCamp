// this function accepts a string and a target string, it checks if the target is at the very end of the string
// returns T or F accordingly

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
