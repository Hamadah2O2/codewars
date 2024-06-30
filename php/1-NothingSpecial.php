<!-- 

Nothing special please

kata: https://www.codewars.com/kata/57029e77005264a3b9000eb5

desc: The notorious Captain Schneider has given you a very straightforward mission. Any data that comes through the system make sure that only non-special characters see the light of day.

Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.

-->


<?php
function nothing_special($s)
{
  // Your code here

  return (is_string($s)) ?
    preg_replace("/[^a-zA-Z0-9\s]/", "", $s)
    : "Not a string!";
}

echo nothing_special(' Sr2	 **@!#ynF');
echo nothing_special("a molotov beam") . "\n";
echo nothing_special("a$$%s%$%%%$#") . "\n";
echo nothing_special("as///'][]#$#$$") . "\n";
echo nothing_special(54) . "\n";
