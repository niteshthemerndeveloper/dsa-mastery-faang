function addUpToMath(number) {
  return (number * (number + 1)) / 2;
}

// Explanation: Math is faster than Logic
//              number = 6;
//              number + 1 = 7;
//              (number * (number + 1)) --> 6 * 7 = 42;
//              (number * (number + 1)) / 2 --> 42 / 2 = 21;
const time1 = performance.now();
console.log(addUpToMath(1000000000));
const time2 = performance.now();

console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds`);
