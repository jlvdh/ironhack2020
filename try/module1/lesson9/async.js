// async
let coffeeJar = 10
const drinks = []
function makeCoffee (actionToDoAfter) {
  coffeeJar -= 10
  if (coffeeJar <= 0) {
    throw (new Error('out of coffee'))
  }
  console.log('starting creating coffee')
  setTimeout(function () {
    console.log('Coffee is done')
    actionToDoAfter()
  }, 3000)
}

function getSugarAndMilk () {
  console.log('getting sugar and milk')
}

function serveCoffee () {
  drinks.push('coffee')
  console.log('serving coffee')
}

makeCoffee(serveCoffee)
getSugarAndMilk(() => true)
