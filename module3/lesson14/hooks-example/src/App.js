import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Form from './Form';
import Kanye from './Kanye';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <Form />
      <Counter counter={counter} setCounter={setCounter}/>
      <Kanye counter={counter}/>
    </div>
  );
}

export default App;
