// Write a function that returns the capitalized words for the given array words.

function capitalizeWords(stringsArr) {
  // add whatever parameters you deem necessary - good luck!
  let resultArr = [];
  if (stringsArr.length === 0) return resultArr;
  if (stringsArr[0]) {
    let capitalizedWords = stringsArr[0].toUpperCase();
    resultArr.push(capitalizedWords);
  }
  resultArr = resultArr.concat(capitalizeWords(stringsArr.slice(1)));
  return resultArr;
}

console.log(
  capitalizeWords(['goal2016', 'target7056', 'invest249', 'people2022'])
);
