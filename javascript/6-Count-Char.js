/* 
 *

Count Character
Url: https://www.codewars.com/kata/52efefcbcdf57161d4000091

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

aaa bbb cccc 

*/
// My practice
function count(string) {
	return string === ""
		? {}
		: string
				.toString()
				.split("")
				.sort()
				.join("")
				.match(/(?:([a-zA-Z])\1+)|\w/g)
				.reduce((acc, value) => {
					acc[value.toString().split("")[0].toString()] = value.toString().length;
					return acc;
				}, {});
}

// Best practice
function counter(string) {
	var count = {};
	string.split("").forEach(function (s) {
		count[s] ? count[s]++ : (count[s] = 1);
	});
	return count;
}

// Try 1
const str = "aabasdiuewhfiaahdfief";

var coo = str.split("");

var result = coo.sort();

var gud = result.join("").match(/(?:([a-zA-Z])\1+)|\w/g) || [];
var res =
	result
		.join("")
		.match(/(?:([a-zA-Z])\1+)|\w/g)
		.reduce((acc, value, index) => {
			acc[value.toString().split("")[0].toString()] = value.toString().length;
			return acc;
		}, {}) || {};

console.log(coo);
console.log(counter(str));
console.log(res);
