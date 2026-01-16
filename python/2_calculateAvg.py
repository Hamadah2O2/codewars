"""
Calculate Average

url: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/python

desc:
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
"""

def find_average(numbers):
    return 0 if len(numbers) == 0 else sum(x for x in numbers) / len(numbers)  


avg = find_average([2,2,2,2,2,2,9])
print(avg)

# ################
# Best
# ################
def find_average_best(numbers):
    return sum(numbers) / len(numbers) if numbers else 0

avg = find_average_best([2,2,2,2,2,2,9])
print(avg)
