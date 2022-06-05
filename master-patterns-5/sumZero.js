//  Write a function which returns an array of two integers sum to zero or undefined

// Exact Naive Solution
function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) return [array[i], array[j]];
    }
  }
  return undefined;
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));

//  Time Complexity
//  for loop = n, for loop = n
//  then it's Time Complexity is Big O(n^2);

// Space Complexity 
// let i = K1, let j = K2 
//  then it's Space Complexity is Big O(1);




/*** Refactored One  ****/

function sumZeroRefactored(arr) {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    }
    else if (sum > 0) {
      right--;
    }
    else {
      left++;
    }
  }
}

console.log(sumZeroRefactored([-2, -2, 2]));
