"""

Split String

url: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/python

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

"""

def solution(s):
    s += "_" if len(s) % 2 != 0 else ""
    return [s[2*i:2*i+2] for i in range(len(s)//2)]

print(solution("abcd"))

# gpt 4o
def solution(s):
    return [s[i:i+2] for i in range(0, len(s), 2)] + ['_'] * (len(s) % 2)
