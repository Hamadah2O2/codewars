function duplicateCount(texted) {
	var text = "asfsasad";
	return (
		text
			.toLowerCase()
			.split("")
			.sort()
			.join()
			.match(/([^])\1+/g) || []
	).length;
}

var text = "aneeuifweijas";
var jum =
	text
		.toLowerCase()
		.split("")
		.sort()
		.join("")
		.match(/([^])\1+/g) || [];

//console.log(duplicateCount("ahahahhah"));
console.log(jum);
