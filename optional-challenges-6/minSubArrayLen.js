// Write a function that returns a minimum number of elements required whose sum is greater than the passed value

function minSubArrayLen(array, value) {
  // Sort the array in an ascending order
  // compare the last element with the given value
  // if it is greater or equal to the passed value then return 1
  // else add second last array element and compare it with the passed value.
  // if it's greater than or equal to the passed value than return the array length - value of j

  let minSum = 0;
  array.sort((a, b) => a - b);

  for (let i = array.length - 1; i >= 0; i--) {
    minSum += array[i];
    let result = array.length - i;
    console.log(minSum, result);
    if (minSum >= value) return result;
  }

  return 0;
}

// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));


function minSubArrayLength(array, value) {
  let start = 0;
  let end = 0;
  let minSum = 0;
  let tempMin = 0;

  for(let i = 0; i < array.length; i++) {
    minSum += array[i];
    if(minSum >= value) {
      end = i;
      break;
    }
  }

  console.log(end, minSum, 'min required elements');
  tempMin = minSum;
  while(start < array.length) {
    if(tempMin >= value) {
      minSum = Math.min(minSum, end - start);

      tempMin -= array[start];
      start++;
    }
    else if(tempMin < value && end < array.length){
      tempMin += array[end];
      end++;
    }
    else{
      break;
    }
  }

  return minSum;
}

console.log(minSubArrayLength([4, 3, 3, 8, 1, 2, 3], 11));

