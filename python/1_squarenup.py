"""
Square(n) Sum

url: https://www.codewars.com/kata/515e271a311df0350d00000f/train/python

desc:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 
"""

def square_sum(numbers):
    # my code 
    count = 0

    for num in numbers:
        count += num ** 2 

    return count

xount = square_sum([2,2,2])

print(xount)

# ################
# Best 
# ################
def square_sum_best(numbers):
    return sum(x ** 2 for x in numbers)

xount = square_sum_best([4,2,2])

print(xount)
