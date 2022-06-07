// Write a function that checks whether both the numbers have same numbers or not?

// Time Complexity  -> Big O(N);
// Space Complexity -> Big O(1);

function sameFrequency(value1, value2) {
  // good luck. Add any arguments you deem necessary.
  let digitsCounter1 = {};
  let value1String = `${value1}`;
  let value2String = `${value2}`;

  for (let val of value1String) {
    digitsCounter1[val] = (digitsCounter1[val] || 1) + 1;
  }

  for (let key of value2String) {
    digitsCounter1[key] = digitsCounter1[key] - 1;
    if (digitsCounter1[key] < 0 || !digitsCounter1[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281));
