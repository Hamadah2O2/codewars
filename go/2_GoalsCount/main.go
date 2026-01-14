/*

Ronaldos goals function

Ronaldo is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17

*/

package main

import "fmt"

func main() {
	i := Goals(5, 10, 2)
	fmt.Print(i)
}

func Goals(a,b,c int) int {
	return a + b + c 
}
