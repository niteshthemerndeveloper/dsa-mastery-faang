// Write a function that returns number of unique values present in an array

function countUnique(array) {
  let unique = 0;
  for (let i = 0; i < array.length; i++) {
    let currentDigit = array[i];
    let nextDigit = array[i + 1];
    if (currentDigit !== nextDigit) {
      unique++;
    }
  }
  return unique || 0;
}

console.log(countUnique([]));

// Time Complexity
// unique = K1, for = K2n That means it is Big O(N);

// Space Complexity
// unique = K1, i = K2, currentDigit = K3, nextDigit = K4 That means it is Big O(1);
