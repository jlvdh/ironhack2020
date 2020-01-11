// array

let fruits = ['apple', 'banana', 'pear', 'mango'];

fruits.push('papaya')

fruits.unshift('coconut')

let removedFruits = fruits.splice(1, 2)

fruits.forEach(function(fruit) {
  console.log(fruit)
})
fruits.pop()
fruits.shift()

console.log(removedFruits)
console.log(fruits)

// Functions

function plusTwo(num) {
  console.log(num + 2);
}

//console.log(plusTwo(7))

function calculator(calcFunction) {
  calcFunction(3)
}

calculator(plusTwo)



  function makeCoffee(callback) {
    setTimeout(function() {
      console.log('coffee is ready')
      callback()
    }, 2000)
  }

  function serveCoffee() {
    console.log('coffee is served')
  }

//makeCoffee(serveCoffee);

makeCoffee(function() {
  console.log('add sugar')
});

const myFunction = function (fruit) {
  console.log('fruit name is ' + fruit)
}

myFunction('papaya');

const multiply = (num, num2) => {
  const number = 2;
  return num * number
}

const simpleFunction = () => "always return this value";

const newNumber = multiply(4);

console.log(multiply(5))

function greeter(name) {
  return `hello ${name}`;
}

const greeter2 = name => `hello ${name}`;

const greeter3 = name => {
  return `hello ${name}`;
}

const newVariable = greeter2('Jorg')

console.log(newVariable);