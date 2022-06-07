//  Write a function that returns a longest unique characters string.

function findLongestSubstring(string) {

  // store the length of the longest unique characters string
  let longestString = 0;

  // store the length of the unique characters string
  let tempString = 0;

  // unique string starting position
  let i = 0;

  // unique string ending position
  let j = 0;

  // Ensure the characters are unique as the j grows
  let charCounter = {};
  string = string.toLowerCase();

  while (j < string.length) {
    // Check if the character does not already exist 
    if (!charCounter[string[j]]) {
      // add the key value pairs of the unique characters
      charCounter[string[j]] = string[j];

      // go to next character in the string
      j++;
    } else {
      // clear the stored unique characters to find the next longest unique characters string
      charCounter = {};
      // move starting position to the next character
      i++;
      // keep the starting position and ending position same for every new unique string
      j = i;
    }
    // store the length of the unique characters string
    tempString = j - i;
    // store the length of the longest unique characters string
    longestString = Math.max(tempString, longestString);
  }
  return longestString;
}

console.log(findLongestSubstring('longestSubString'));
