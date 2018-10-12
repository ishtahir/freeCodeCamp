// returns the provided string with the first letter of each word capitalized, the rest of the word is in lower case

function titleCase(str) {
	let myStr = str.toLowerCase();
	myStr = myStr.split(' ');
	console.log(myStr);
	for (let i = 0; i < myStr.length; i++) {
		myStr[i] = myStr[i][0].toUpperCase() + myStr[i].slice(1);
	}
	return myStr.join(' ');
}

titleCase("I'm a little tea pot");
