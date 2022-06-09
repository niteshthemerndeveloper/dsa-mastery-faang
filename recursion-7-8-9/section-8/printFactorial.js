// Write a function that prints the factorial of a number

function printFactorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return `Iterative Result: ${result}`;
}

console.log(printFactorial(3));

// Tn = O(n) - N number of times
// Sn = O(1) - Constant Time

/*********** RECURSIVE SOLUTION ***********/
function printFactorialRecursively(n) {
  return n === 1 ? 1: n * printFactorialRecursively(n -1);
}

console.log(printFactorialRecursively(3));
