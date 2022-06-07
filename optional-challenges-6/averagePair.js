// Write a function that returns a matching pair of numbers whose average equals the target average.

// Time Complexity -> Big O(N);
// Space Complexity -> Big O(1);

function averagePairs(arr, average) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let arrayAvg = (arr[left] + arr[right]) / 2;
    if (arrayAvg === average) {
      return true;
    } else if (arrayAvg > average) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

// console.log(averagePairs([2, 2, 8], 3));
