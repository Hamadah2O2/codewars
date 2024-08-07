/*

Decode Morse Code 
Url: https://www.codewars.com/kata/54b724efac3d5402db00065e

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"


*/

// Map Morses Codes
const morseCodeMap = {    
  '.-': 'A',    '-...': 'B',  '-.-.': 'C',  '-..': 'D',   '.': 'E',    
  '..-.': 'F',  '--.': 'G',   '....': 'H',  '..': 'I',    '.---': 'J', 
  '-.-': 'K',   '.-..': 'L',  '--': 'M',    '-.': 'N',    '---': 'O',  
  '.--.': 'P',  '--.-': 'Q',  '.-.': 'R',   '...': 'S',   '-': 'T',    
  '..-': 'U',   '...-': 'V',  '.--': 'W',   '-..-': 'X',  '-.--': 'Y', 
  '--..': 'Z',  

  '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', 
  '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', 

  '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!', 
  '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&', '---...': ':', 
  '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', 
  '.-..-.': '"', '...-..-': '$', '.--.-.': '@',

  '...---...': "SOS"
};

// My solution
decodeMorse = function (morseCode) {
	return morseCode
		.toString()
		.split("   ")
		.map((value) => {
			return value
				.toString()
				.split(" ")
				.map((value) => morseCodeMap[value])
				.join("");
		})
		.filter((value) => value !== "")
		.join(" ")
		.replace(/^\s+|\s+$/g, "");
};

// Try
const morse = "    .... . .-.. .-.. ---   .-- --- .-. .-.. -..      ";
const morse2 = "    .... . -.--    ";

console.log(decodeMorse("...---..."));
console.log(
	morse
		.toString()
		.split("   ")
		.filter((value) => value !== "")
		.map((value) => {
			return value
				.toString()
				.split(" ")
				.map((value) => morseCodeMap[value])
				.join("");
		})
		.join(" ")
		.replace(/^\s+|\s+$/g, "")
);
// WOW solution
console.log(morse.trim().split(/  | /));
