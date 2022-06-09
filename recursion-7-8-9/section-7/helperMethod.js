// A recursive function inside a non-recursive function

function checkOdds(arr) {
  let result = [];

  // Helper Method Recursion
  function helperRecursion(arr) {
    if (arr.length === 0) return result;

    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }

    return helperRecursion(arr.slice(1));
  }
  return helperRecursion(arr);
}

console.log(checkOdds([2, 3, 2016, 7056, 5055]));
