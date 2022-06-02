// Optimize the Bubble sort for sorted array -> Making it adaptable

function bubbleSortOptimize(arr) {
  const swapValues = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // #CodeWithHarry Video solution
  let isSorted = true;

  for (let i = arr.length; i > 0; i--) {
    isSorted = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapValues(arr, j, j + 1);
        isSorted = false;
      }
    }
    if (isSorted) return arr;
  }
}
console.log(bubbleSortOptimize([2016, 249, 8, 64, 121]));
