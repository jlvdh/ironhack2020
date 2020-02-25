const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort((a, b) => {
  console.log(`${a} - ${b} = ${a -b}`)
  return b - a;
});

console.log(numbers);
