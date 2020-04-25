import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu'
import Counter from './components/Counter/Counter'
// import ReactPlayer from 'react-player'

const ingredients = {
  vegetable: 'cauliflower',
  meat: 'Tenderloin',
  sauce: 'BBQ'
}

function App() {
  return (
    <div className="App">
      <Counter />
      <Menu 
        vegetable="cauliflower" 
        meat="tenderloin" 
        sauce="bbq" />
      <Menu 
        vegetable="Brocolli"
        meat="Beyond meat"
        sauce="garlic"/>
      {/* <Menu ingredient={ingredients} /> */}
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" /> */}
    </div>
  );
}

export default App;
