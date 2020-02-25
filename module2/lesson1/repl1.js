// console.log(num)

// let num = 5;

// function addNum(num) {
//   console.log(num)
// }

// var addNum = function(num) {
//   console.log(num)
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`iteration ${i}`)
// }

// const i = 5

// i = 6

// let i = 5;

// const i = 7;

// console.log(i)

// const eventListener = () => {

// }

// const fruit = ['apple', 'mango', 'papaya'];

// // const fruit1 = fruit[0];
// // const fruit2 = fruit[1];

// const [ , , karate ] = fruit

// // console.log(fruit1)
// // console.log(fruit2)
// console.log(karate)

// const profile = {
//   name: 'mr. Cat',
//   age: 8,
//   catYears: 35,
//   img: 'http://placekitten.com/400/400',
//   kittens: [{
//     name: 'Gizmo',
//     age: 6,
//     img: 'http://placekitten.com/400/400'
//   },
//   {
//     name: 'mr wiggles',
//     age: 7,
//     img: 'http://placekitten.com/400/400'
//   }]
// }

// const { name, age, kittens } = profile;

// console.log(`<h1> hi my name = I\'m ${age} years old<h1>`)

// kittens.forEach(kitten => {
//   console.log(`kitten name is ${kitten.name}`)
// })

// console.log(kittenName);


// const player {
//   x:
//   y:
//   speed:
// }

// const {x, y} = this.player;
// const x = this.player.x
// const y = this.player.y

// x === this.player.x
// y === this.player.y

// x > this.object.x 
// x < this.object.x 
// x > this.object.y
// x > this.object.z

// const kitten = {
//   name: "john"
// };

const otherKitten = kitten;

otherKitten.name = "mr. Wiggles";

console.log(kitten)

const fruit = ['apple', 'mango', 'kiwi']

const kitten = { kittenName: 'John' }

const fruit2 = ['papaya', 'pineapple', kitten]

const fruitArray = [ ...fruit, ...fruit2, 'banana']

// console.log(fruitArray);

fruitArray[0] = 'Jackfruit';

console.log(fruit[0])
fruitArray[5].kittenName = 'Wilma'

console.log(fruitArray);
console.log(fruit2)