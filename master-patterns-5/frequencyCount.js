// Write a function that checks if 1st arrays the square values of 2nd array

function sameArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const squaredArray = arr1.map((el) => el * el).sort((a, b) => a - b);

  arr2.sort((a, b) => a - b);

  const result = arr2.filter((el, index) => el !== squaredArray[index]).length
    ? false
    : true;

  return result;
}

console.log(sameArray([1, 2, 3, 2], [9, 1, 4, 4]));

// Time Complexity of above program
//  if = K1, map = K2.n, sort = K3.n, again sort = K4.n
// K1 + K2.n + K3.n + K4.n = Big O of (n);

// && Space Complexity of above program
// squaredArray = K1.n, result = K2.n ==> K1.n + K2. n or Big of O(n)
