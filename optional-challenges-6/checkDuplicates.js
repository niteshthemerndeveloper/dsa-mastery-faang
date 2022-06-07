

// Write a function that checks if the value is repeated or not?

//  #1 Solution: 

function checkDuplicates(...args) {
  let elCounter = {};

  for(let value of args) {
    elCounter[value] = (elCounter[value] || 0) + 1;
    if(elCounter[value] > 1) return true;
  }
  return false;
}

// console.log(checkDuplicates(1, 3, 4, 8, 8));

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  
  
  let i = 0;
  
  for (let j = 1; j < args.length -1; j++){
      if(args[i] === args[j] || args[i] === args[args.length - 1]) return true;
      i++
  }
  return false;
}