// write a function that returns the number at a given position in a fibonacci sequence

function fibSequence(number) {
  if(number <= 2) return 1;
  return fibSequence(number -1) + fibSequence(number -2);
}

console.log(fibSequence(4));
console.log(fibSequence(4));
console.log(fibSequence(6));