/*

Whats between

url: https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/go

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/

package main

import "fmt"

func main() {
	a := 1
	b := 4

	res := []int{}

	for i := a; i <= b; i++{
		res = append(res, i)
	}

	// return res
	fmt.Print(res)
}
