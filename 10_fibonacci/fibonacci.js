const fibonacci = function (pos) {
	//pos = Number(pos);
	if (pos == 0) return 0;
	else if (pos < 0) return "OOPS";
	let a = 1,
		b = 1,
		count = 2,
		c;
	while (count < pos) {
		c = a + b;
		a = b;
		b = c;
		count++;
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
