/* 

Counting Duplicate

url: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

desc: Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text) {
	var numberOfDuplicate = 0;
	text = text.toString().toLowerCase();
	while (text !== "") {
		var firstchar = text.charAt(0);
		text = text.replace(firstchar, "");
		if (text.includes(firstchar)) {
			while (text.includes(firstchar)) {
				text = text.replace(firstchar, "");
			}
			numberOfDuplicate++;
		} else {
			while (text.includes(firstchar)) {
				text = text.replace(firstchar, "");
			}
		}
	}
	return numberOfDuplicate;
}

// TESTING ZONE
var text = "aabcde";
var numberOfDuplicate = 0;
//text = text.replace("a", "");
var arr = text.slice(3, 3 + 1);
var tes = text.charAt(5);
var include = text.includes("b");

while (text !== "") {
	var firstchar = text.charAt(0);
	text = text.replace(firstchar, "");
	if (text.includes(firstchar)) {
		while (text.includes(firstchar)) {
			text = text.replace(firstchar, "");
		}
		numberOfDuplicate++;
	} else {
		while (text.includes(firstchar)) {
			text = text.replace(firstchar, "");
		}
	}
}

var answer1 = text.indexOf("c");

//var answer2 = arr.find((val, index) => {
//	return val == "b";
//});

//console.log(answer1);
//console.log(answer2);
//console.log(answer3);
//console.log(arr);
//console.log(text);
//console.log(tes);
console.log(include);
console.log(numberOfDuplicate);
