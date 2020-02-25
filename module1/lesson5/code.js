const fruit = {
    name: "banana",
    color: "orange"
  }
  const fruit2 = {
    name: "kiwi",
    color: "green"
  }
  
  const fruit3 = {
    name: "raspberry",
    color: "red",
    reviews: ['very nice fruit', 'didn\'t like it'],
    dimensions: {
      width: 10,
      height: 15
    }
  }
  
  const fruits = [fruit, fruit2, fruit3];
  
  console.log(fruits[2].dimensions.width)
  
  
  
  console.log(fruits)
  
  // fruit.name.forEach(fruitname => {
  //   if(fruitname === "kiwi") {
  //     console.log('there\'s a kiwi in the names');
  //   }
  // })
  
  // fruit.name = "banana"
  
  // fruit.taste = "sweet"
  
  // fruit['peel'] = true
  
  
  
  for(let fruitKey in fruit) {
    console.log(`${fruitKey} is ${fruit[fruitKey]}`)
  }
  
  Object.values(fruit)