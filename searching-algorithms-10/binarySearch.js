// Write a function that returns the index if the value is found else returns -1

function binarySearchEx(sortedArr, value) {
  let leftP = 0;
  let rightP = sortedArr.length - 1;

  for (let i = 0; i < sortedArr.length; i++) {
    // The middle point is always calculated by adding all the numbers and dividing them by the total numbers of elements
    let middleP = Math.ceil((rightP + leftP) / 2);
    if (sortedArr[middleP] === value) return middleP;

    if (sortedArr[middleP] > value) {
      // if middle value is 4 and the value is 2 then decrease right pointer
      right = middleP - 1;
    }

    if (sortedArr[middleP] < value) {
      // if middle value is 4 and the value is 5 then increase left pointer
      leftP = middleP + 1;
    }
    console.log(middleP, sortedArr[middleP], sortedArr, value);
  }
  return -1;
}

console.log(binarySearchEx([1, 2, 3, 4, 5], 5));
