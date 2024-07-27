/*

Array diff
url: https://www.codewars.com/kata/523f5d21c841566fde000009

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

// My practice
function arrayDiff(a, b) {
	b.forEach((valB) => (a = a.filter((valA) => valA !== valB)));
	return a;
}

// Best practice
function arrayDiffT(a, b) {
	return a.filter((value) => !b.includes(value));
}

let arr1 = [1, 2, 2, 3, 3],
	arr2 = [2, 3];

//dasar
let res = arr1.filter((value) => {
	return value !== 2;
});

// eksekusi
//let resultEksekusi = arr2.forEach((val) => {
//	arr1 = arr1.filter((value) => value !== val);
//});

// inspirasi zloyrusskiy, ttvi-cse, Rejec, raekwonstorm, woyorus, yumaa, montik, ptrkkim, acalabano, mckpm
let result = arr1.filter((value) => !arr2.includes(value));

console.log(res);
console.log(result);
