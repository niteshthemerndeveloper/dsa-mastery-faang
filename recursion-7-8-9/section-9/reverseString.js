// Write a function that returns the reversed string

function reverseString(string) {
  // call the function from end of string
  // Once the string has no more characters then return an empty string
  // slice the string until the end of the string
  if (string.length === 0) return '';
  return (
    string[string.length - 1] +
    reverseString(string.slice(0, string.length - 1))
  );
}
console.log(reverseString('Goal2016'));
