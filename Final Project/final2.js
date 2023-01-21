function createPhoneNumber(numbers) {
  let string = numbers.map(String);
  let tel = `(${string.slice(0, 3).join("")}) ${string
    .slice(3, 6)
    .join("")}-${string.slice(6, 10).join("")}`;
  return tel;
}

// it should return a string of  => returns "(123) 456-7890"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
