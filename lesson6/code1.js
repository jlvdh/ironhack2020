
const newArray = []

numbers.forEach(num => {
  newArray.push(num * 3);
})

const multiplied = numbers.map(num => {
  return num * 3
})

console.log(multiplied);

console.log(numbers)

console.log(numbers.map(num => {
  return num * 3
}))


const summedArray = numbers.reduce((accumulator, currentValue) => {
  console.log(`accumulater = ${accumulator}, currentValue= ${currentValue}`)
  return accumulator + currentValue
}, 0)

console.log(summedArray);

const words = ["This", "is", "one", "big", "string"];

// ES5:
const bigString = words.reduce(function(acc, word){
    console.log(`accumulater = ${acc}, currentValue= ${word}`)
  return word;
},"startofstring");

console.log(bigString);

const numbers = [2, 4, 5, 6, 9, 10, 11];

const filteredArray = numbers.filter(num => {
  return num % 2 === 0;
})

console.log(filteredArray);

