// Write a function that return an array of numbers

function flatten(array) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  let i = 0;

  if (array.length === 0) return newArr;
  function collectNumbers(innerArray) {
    console.log(innerArray, innerArray[0], newArr, 'inner loop');
    if (innerArray.length === 0) return newArr;
    if (Array.isArray(innerArray[0])) {
      return collectNumbers(innerArray[0]);
    } 
    newArr.push(innerArray[0]);
    if (innerArray.length !== 0) {
      return collectNumbers(innerArray.slice(1));
    }
    newArr.push(innerArray[0]);
  }
  if (Array.isArray(array[0])) {
    collectNumbers(array[0]);
  } else {
    newArr.push(array[0]);
  }

  console.log(array[0], newArr, Array.isArray(array[0]));
  newArr = newArr.concat(flatten(array.slice(1)));
  return newArr;
}

// console.log(flatten([1, [2, [3, 4], [[5]]]]));

function flattenIterative(array) {
  let newArr = [];

  if(array.length === 0) return newArr;

  if(Array.isArray(array[0])){
    for(let i = 0; i < array[0].length; i++) {
      newArr.push(array[0][i]);
    }
  }
  else{
    newArr.push(array[0]);
  }
  newArr = newArr.concat(flattenIterative((array.slice(1))));
  return newArr;
}

console.log(flattenIterative([[[1, 2, 3, 4]]]));
