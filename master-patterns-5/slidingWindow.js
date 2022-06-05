//  Write a function that returns the largest sum of elements in an array;

// Naive Solution
function slidingWindowNaive(array, numbers) {
  if (array.length === 0) return null;
  const results = [];
  for (let i = 0; i <= array.length - numbers; i++) {
    results.push(array.slice(i, i + 2).reduce((sum, el) => sum + el));
  }
  return Math.max(...results);
}

console.log(slidingWindowNaive([], 2));

// Time Complexity => Big O(N^2)
// Space Complexity => Big O(N);
