/*

Greed is Good
Url: https://www.codewars.com/kata/5270d0d18625160ada0000e4

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

Note: your solution must not modify the input array.
*/

1222334456666777889
// Formula
// ([0-9])\1{2,2}|\d

// FIrst
function score( dice ) {
  var score = 0;
  const sorted = dice.sort().join("").match(/([0-9])\1{2,2}|\d/g);

  sorted.forEach((value) => {
    switch (value) {
      case "111":
        score += 1000;
        break;
      case "666":
        score += 600;
        break;
      case "555":
        score += 500;
        break;
      case "444":
        score += 400;
        break;
      case "333":
        score += 300;
        break;
      case "222":
        score += 200;
        break;
      case "1":
        score += 100;
        break;
      case "5":
        score += 50;
        break;
      default:
        break;
    }
  })

  return score;
}

// Seccond
function score2( dice ) {
  var score = 0;
  
  const freq = {};
  dice.forEach((num) => {
    freq[num] = (freq[num] || 0) + 1
  });

  for (let i = 0; i <= 6; i++) {
    if(parseInt(freq[i] / 3) > 0){
      score += ((i == 1 ? 10 : i) * 100) * (parseInt(freq[i] / 3));
    }

    if (i === 1 && freq[i] && freq[i] % 3 != 0) {
      score += 100 * (freq[i] % 3); 
    } 

    if (i === 5 && freq[i] && freq[i] % 3 != 0) {
      score += 50 * (freq[i] % 3); 
    }
  }

  return score;
}


// testing
const haho = new Object({1:2,3:4,5:6});
//console.log(score2([1,2,1,1,5,5,5,5,1,3]));
console.log(score2([4, 4, 4, 3, 3]));
//console.log(haho.valueOf);
//console.log("1222334456666777889".match(/([0-9])\1{2,2}|\d/g));
