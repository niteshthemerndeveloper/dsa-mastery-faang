// Write a function that gives the result of the Selection Sort Pseudocode

function selectionSort(arr) {
  const swapValues = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let minValIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    // if 8 < 24 | i = 0, j = 1 & minValIdx = 0 true -> next smaller Index minValIdx = 1;

    // When j = 1, minValIdx 1;
    // When j = 2, minValIdx 2;
    // When j = 3, minValIdx 3;

    // When i = 1, j = 2, & minValIdx = 3
    minValIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValIdx]) {
        minValIdx = j;
        isSorted = false;
      }
    }
    // first swap i = 0 & minValIdx = 3;
    if (i !== minValIdx) swapValues(arr, i, minValIdx);
  }
  return arr;
}

console.log(selectionSort([249, 2016, 8, 64, 1008]));
