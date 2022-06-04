function addUpTo(number) {
  let total = 0;
  for (let i = 0; i <= number; i++) {
    total += i;
  }
  return total;
}
const time1 = performance.now();
console.log(addUpTo(1000000000));
const time2 = performance.now();

console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds`);

