// Write a function that returns the first letter capitalized for an given array elements

function capitalizeFirst(stringArr) {
  let newArr = [];
  if (stringArr.length === 0) return newArr;
  if (stringArr[0]) {
    let capitalizedString = stringArr[0];
    capitalizedString =
      capitalizedString[0].toUpperCase() + capitalizedString.slice(1);
    newArr.push(capitalizedString);
  }
  newArr = newArr.concat(capitalizeFirst(stringArr.slice(1)));
  return newArr;
}

console.log(
  capitalizeFirst(['goal2016', 'target7056', 'invest249', 'people687'])
);
