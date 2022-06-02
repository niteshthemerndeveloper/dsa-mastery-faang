// Write a function that returns the result of the pseudocode 

function bubbleSort(arr) {
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j + 1]){
        swapValues(arr, j, j+1);
      }
    }
  }
  return arr;
}

const swapValues = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(bubbleSort([249, 121, 8, -64, 2016]));