// Write a function that will compare two values, one will be a number and one will be a string.Return true if they are the same character(regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including.toString(), .join(), .split(), parseInt and.Number().

function add(a, b) {
  // code here

  if (typeof a === "number") {
    a = `${a}`;
  }
  if (typeof b === "number") {
    b = `${b}`;
  }
  return a === b;

}


console.log(add("3", 3));

// best practice
// function add(a, b) {
//   return a == b
// }