/*
1)PROBLEM STATEMENT
Write a function isPalindrome that will receive one argument, a string.
Your function should return true if the string is a palindrome 
(that is, if it reads the same forwards and backwards, like "mom" or "racecar"), and return false if it is not a palindrome
To keep things simple, your function only needs to deal with lowercase strings that are all letters (don't worry about spaces or special characters).

2)REWRITE
I need to make an isPalindrome function that returns either true or false. 
When the input string is the same forwards and backwards, I should return true. 
That means that if the input string is the same after I reverse it, I should return true. 
For instance, "mom" in reverse is also "mom", and "racecar" in reverse is also "racecar", 
so my solution should return true for these cases. "hi" in reverse is "ih", 
so my solution should return false for this case.
Note that this description of the problem highlights the inputs and output (return value), 
and gives us some ideas to explore later in our pseudocode.

3) TEST CASES
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

4)PSEUDOCODE
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false

5) CODE

function isPalindrome(word) {
  // reverse the input string
  // if the reversed string is the same as the input
  //   return true
  // else
  //   return false
}

FINAL CODE
function reverseString(word) {
  // TODO: implement string reversing functionality
  return word;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

create an array from the input string
reverse the array
create a string from the reversed array
return the reversed string

function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

COMPLETE CODE
function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}lear

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

*/

function isPalindrome(word) {
  // Write your algorithm here
  
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}