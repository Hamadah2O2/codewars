// Each Cons
//
// kata: https://www.codewars.com/kata/545af3d185166a3dec001190/train/go
//
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
//
// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]
//
// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
//
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

package main

import "fmt"

func main() {
	arr_num := []int{1, 2, 3, 4, 5}
	arr_res := EachCons(arr_num, 2)

	fmt.Println(arr_res)
}

func EachCons(arr []int, n int) [][]int {
	res := [][]int{}
	for v, _ := range arr {
		tmp := []int{}
		for i := v; i < v+n; i++ {
			if i >= len(arr) {
				tmp = []int{}
				break
			}
			tmp = append(tmp, arr[i])
		}
		if len(tmp) > 0 {
			res = append(res, tmp)
		}
		tmp = []int{}
	}
	return res
}

// Bestpractice
func EachConsBest(arr []int, n int) (res [][]int) {
	for i := 0; i+n <= len(arr); i++ {
		res = append(res, arr[i:i+n])
	}
	return
}
