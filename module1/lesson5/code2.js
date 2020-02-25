let fruit = {
    name: ["papaya", "banana"],
    color: "orange"
  }
  
  let furniture = new Object({
    name: "chair",
    material: "wood"
  })
  
  const theKey = 'material';
  
  console.log(fruit.name[1]);
  
  
  console.log(furniture[theKey])
  
  console.log(furniture['material'])
  
  console.log(Object.keys(fruit))
  
  console.log(Object.values(fruit))
  
  console.log('color' in furniture)