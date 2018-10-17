// check if a value is classified as a boolean primitive

function booWho(bool) {
	return typeof bool === 'boolean';
}

booWho(false);
booWho(true);
booWho([1,2,3]);
booWho({a:1});
