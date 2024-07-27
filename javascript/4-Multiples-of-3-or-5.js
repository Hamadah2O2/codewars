/*
 
 Multiples of 3 or 5
 url: https://www.codewars.com/kata/514b92a657cdc65150000006

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

*/

// Solution 1
function solution(number) {
	const multiples = [];

	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			multiples.push(i);
		}
	}

	return multiples.reduce((prev, cur) => prev + cur, 0);
}

// Solution 2
function solution2(number) {
	let result = 0;

	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			result += i;
		}
	}

	return result;
}

//Solution 3 idk bro
function solution3(num) {
	return (sum = (() => {
		let i = 0,
			result = 0;
		while (i < num) {
			i % 3 === 0 || i % 5 === 0 ? (result = result + i) : result;
			i++;
		}
		return result;
	})());
}

//const numero = 10;
//const hasile = (() => {
//	let i = 0,
//		result = 0;
//	while (i < numero) {
//		i % 3 === 0 || i % 5 === 0 ? (result = result + i) : result;
//		i++;
//	}
//	return result;
//})();

//numero.toExponential;

console.log(solution2(10));
//console.log(hasile);
