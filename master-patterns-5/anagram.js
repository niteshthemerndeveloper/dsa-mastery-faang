//  Write a function that checks if a string is an anagram of second string

function checkAnagram(string1, string2) {
  if((string1.length !== string2.length)) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let char of string1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of string2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(frequencyCounter1[key] === frequencyCounter2[key])) {
      return false;
    }
  }

  return true;
}

console.log(checkAnagram('Game', 'Game'));
