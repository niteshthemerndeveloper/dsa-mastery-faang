// Write a function that returns the number of times a particular string has been written in the given string

function countString(longString, string) {
  let count = 0;

  
  for(let i = 0; i < longString.length; i++){
    if(longString.slice(i, i + string.length) === string) {
      count++;
    }
  }
  return count;
}

console.log(countString("This is the final war and its going to be a great war, lets play this war gamewarwarrwar.", "war"));