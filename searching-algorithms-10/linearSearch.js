// Write a function that returns the index of the matching value

function searchIndex(arr, value) {
  // Step1 - Write a function and boiler code
  // Step2 - Loop through the array
  let result = [];
  let index = 0;
  function findValueInArray(arr, value) {
    if (arr[0] === value) {
      result.push(index);
      return;
    }
    if (arr.length === 0) {
      result.push(-1);
      return;
    }
    index++;
    return findValueInArray(arr.slice(1), value);
  }
  findValueInArray(arr, value);
  // Step3 - Search the given value in the array

  // Step4 - Return the index of the matching value
  // Step5 - Return -1 if the value is not found
  return result[0];
}

console.log(searchIndex([2016, 7056, 249, 121, 64, -8], -64));

function linearSearch(array, value) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

// Time Complexity - O(N) as the n grows the number of operations will also grow n times
// Space Complexity - O(1) as the n grows the amount of space required is almost the same.
