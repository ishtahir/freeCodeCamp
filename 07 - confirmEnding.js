// this function accepts a string and a target string, it checks if the target is at the very end of the string
// returns T or F accordingly

confirmEnding = (str, target) => {
	let newTarget = '';
	for (let i = (str.length - target.length); i < str.length; i++) {
		newTarget += str[i];
	}
	return newTarget === target ? true : false;
}
