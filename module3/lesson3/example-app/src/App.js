import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat'
import Box from './components/Box.jsx'

const cats = [{
  name: 'wiggles',
  age: 6,
  owner: 'Jorg',
  sleeping: false
},
{
  name: "Nica",
  age: 8,
  owner: "Daniel",
  sleeping: true,
},
{
  name: 'gaius',
  age : 12,
  owner: 'Friso',
  sleeping: true 
},
{
  name: 'brutus',
  age: 9,
  owner: 'Friso',
  sleeping: false  
},
{
  name: 'blue',
  age: 5,
  owner: 'Yang',
  sleeping: false
},  
{
  name: 'Gismo',
  age: 7,
  owner: 'Mark',
  sleeping: false
},
{
  name: 'Mr.cat' ,
  age: 4,
  owner: 'Raj',
  sleeping: false
},
{
  name: 'Marpa',
  age: 12,
  owner: 'Alex',
  sleeping: true
},
{
  name: 'Mr. Meow',
  age: 9,
  owner: 'Independent',
  sleeping: true
},
{
  name:'Musya',
  age:13,
  owner:'Anastasiia',
  sleeping: true
}, 
{ 
  name: '8a8C6ubm&^', 
  age: 6,
  owner: 'Michiel',
  sleeping: false
}, 
{
  name: 'Plato',
  age: 2437,
  owner: 'hyperuraniun',
  sleeping: true
},
{
  name: 'Spooky',
  age: 10,
  owner: 'Chelsey',
  sleeping: true,
}]

// function App() {
//   return (
//     <>
//     <div className="App">
//       {cats.map((cat, index) => (
//             <Cat key={index}
//            name={cat.name}
//            age={cat.age}
//            owner={cat.owner}
//            sleeping={cat.sleeping}
//            />
//       ))}
//     </div>
//     <footer> </footer>
//     </>
//   );
// }

// export default App; 


export default class App extends Component {

  state = {
    cats: cats
  }

  filterSleeping = () => {
    const sleepingCats = this.state.cats.filter(cat => cat.sleeping)
    this.setState({cats: sleepingCats})
  }

  render() {
    return (
      <div className="App">
        <Box>
          <button onClick={this.filterSleeping}>show only sleeping cats</button>
        </Box>
          {this.state.cats.map((cat, index) => (
            <Cat key={index}
           name={cat.name}
           age={cat.age}

           owner={cat.owner}
           sleeping={cat.sleeping}
           />
      ))}
      </div>
    )
  }
}

