function likes(names) {
  // TODO

  let arrLen = names.length;
  let rest = arrLen - 2;

  return !arrLen
    ? `no one likes this`
    : arrLen === 1
    ? `${names[0]} likes this`
    : arrLen === 2
    ? `${names[0]} and ${names[1]} like this`
    : arrLen === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : arrLen >= 4
    ? `${names[0]}, ${names[1]} and ${rest} others like this`
    : "";
}

console.log(likes([]));
