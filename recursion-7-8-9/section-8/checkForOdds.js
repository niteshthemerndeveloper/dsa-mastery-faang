// Write a function that calls itself to check if a given array has any odd numbers.
let i = 0;
function checkForOdds(numbers) {
  if (!numbers.length) return 'No Odds';
  i++;
  console.log('I got printed ' + i + ' times');
  return numbers[0] % 2 === 0 ? checkForOdds(numbers.slice(1)) : numbers[0];
}

console.log(checkForOdds([3332, 4888, 2016, 5055, 7056]));

console.log('This is called Recursion: When a function calls itself');

// Time Complexity -
// Numbers could be n so the function will run Kn times therefore it's complexity is O(n)

// Space Complexity -
// O(1) is constant because we are not storing n number of inputs to run this program
