let coffeeAmount = 10
const drinks = []

function makeCoffee (whenDone) {
  if (coffeeAmount > 5) {
    console.log('starting making coffee')
    coffeeAmount -= 5
    setTimeout(function () {
      console.log('coffee is done')
      whenDone()
    }, 2000)
  } else {
    throw ('There is not enough coffee')
  }
}

function serveCoffee () {
  console.log('serve coffee')
  drinks.push('coffee')
}

function deliverCoffee () {
  throw ('delivery guy drunk the coffee')
  console.log('sending coffee out for delivery')
}

makeCoffee(deliverCoffee)
// serveCoffee();
