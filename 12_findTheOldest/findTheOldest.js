const findTheOldest = function (people) {
	people.sort((a, b) => {
		const date = new Date();
		let year = date.getFullYear();
		if (!a.yearOfDeath) a.yearOfDeath = year;
		if (!b.yearOfDeath) b.yearOfDeath = year;
		if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth)
			return -1;
		else return 1;
	});
	return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
