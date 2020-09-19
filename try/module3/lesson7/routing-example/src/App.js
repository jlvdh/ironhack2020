import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import AnotherComponent from './AnotherComponent/AnotherComponent';
import ClassComp from './ClassComp/ClassComp';

function App(props) {
  return (
    <div className="App">
      <header><Link to="/anotherone">anotherone</Link></header>
      <Switch>
      <Route exact path='/'>NANANA</Route>
      <Route path='/anotherone/:gangsters' component={AnotherComponent}/>
      <Route path='/cc' component={ClassComp} />
      </Switch>
    </div>
  );
}

export default App;
