let price = 5;

const price2 = price;

price = 7

console.log(price2)

function cloneObject(object) {
  const clone = {}

  for(let key in object) {

    if( object[key] != null && typeof object[key] === 'object'){
      clone[key] = cloneObject(object[key])
    } else {
      clone[key] = object[key];
    }
  }
  return clone;
}

const fruit = {
  name: "papaya",
  color: "orange",
  state: {
    ripeness: 'ready',
    quality: 8
  },
  eat: function() {
    console.log('eating the fruit');
  }
}

// const fruit2 = Object.assign({}, fruit);

// const fruit2 = JSON.parse(JSON.stringify(fruit))

const fruit2 = cloneObject(fruit);

fruit2.name = "kiwi"
fruit2.state.ripeness = 'rotten'


console.log(fruit)
console.log(fruit2)

fruit.eat()
fruit2.eat()

