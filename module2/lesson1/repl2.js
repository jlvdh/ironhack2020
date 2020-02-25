// function makeCoffee(cb) {
//   setTimeout(() => {
//     console.log('coffee is made')
//     cb()
//   }, 1000)
// }

function serveCoffee() {
    console.log('coffee is served')
  }
  
  // function drinkCoffee() {
  
  // }
  // makeCoffee(() => {
  //   serveCoffee(drinkCoffee)
  // );
  // const coffee = 0;
  
  // const makeCoffee = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  
  //     if (coffee <= 0) {
  //       //throw('no more coffee')
  //       reject('no more coffee')
  //     } else {
  //       console.log('making coffee')
  //       resolve()
  //     }
  //   }, 1000)
  // })
  // .then(() => {
  //   serveCoffee();
  //   return 'coffee was good'
  // })
  // .then((opinion) => {
  //   console.log('drink coffee')
  //   console.log(opinion)
  // })
  // .catch(e => {
  //   console.log(`An error has occurred: ${e}`)
  // })
  let coffeeStash = 0;
  
  // class Coffee {
  //   constructor(type) {
  //     this.type = type;
  //   }
  // }
  
  const makeCoffee = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (coffeeStash <= 0) {
          throw('no more coffee')
          //reject('no more coffee')
        } else {
         console.log('making coffee')
          resolve('Americano')
       }
      }, 1000)
    })
  }
  
  const addSugar = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('adding sugar')
        resolve()
      },1000)
    })
  }
  
  makeCoffee()
  .then(() => {
    return addSugar()
  }, (error) => {
    console.log(error)
  })
  .then((coffeeType) => {
    console.log(coffeeType)
    //throw('Coffee is cold');
    coffeeType = "espresso"
    return coffeeType
  }).then((coffeeType)=> {
    console.log(coffeeType);
  })
  .catch(e => {
    console.log(e)
  })