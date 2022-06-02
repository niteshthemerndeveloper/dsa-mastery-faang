//  Write a function that returns the result of the pseudocode

function insertionSort(arr) {
  const swapValues = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0 && j-1 !== j; j--) {
      if (arr[j] < arr[j - 1]) {
        swapValues(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([2016, 249, 8, 64]));
