// Write a recursive function to sum the numbers until 1;

function sumRange(number) {
  return number === 1 ? 1 : number + sumRange(number - 1);
}

console.log(sumRange(3));

// Time Complexity Tn = O(n) number of times
// Space Complexity Sn = O(1) Constant Time
