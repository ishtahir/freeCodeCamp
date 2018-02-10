// this function accepts an array and potential multiple additional arguments, it removes all additional arguments from array and returns it

function destroyer(arr) {
    for (var i = 1; i < arguments.length; i++) {
    	while (arr.includes(arguments[i])) {
    	var index = arr.indexOf(arguments[i]);
    	arr.splice(index, 1);
    	}
    }
    return arr;
}
