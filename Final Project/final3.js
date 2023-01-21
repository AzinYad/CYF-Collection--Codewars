function solution(number) {
  let i = 1;
  let result = 0;
  let arr = [];
  if (number <= 0) return 0;
  do {
    if (i % 3 === 0 || i % 5 === 0) arr.push(i);
    i++;
  } while (i < number);

  for (let num of arr) {
    result += num;
  }
  return result;
}

console.log(solution(10));
