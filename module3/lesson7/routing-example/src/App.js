import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Wiggles from './components/Wiggles/Wiggles';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/profile">Profile</Link> |
        <Link to="/cats">cats</Link>
        <Link to='/cats/wiggles?limit=10'>show first ten results</Link>
      </header>
        <Route exact path='/'><p>this is the root of our website</p></Route>
        <Route path='/profile'><i>this is the profile page</i></Route>
        <Route path='/cats'>
          <header>
            cat menu
          </header>
          </Route>
        <Route path='/cats/gizmo'>
          <img src='http://placekitten.com/50/50' alt="cats" />
        </Route>
        <Route path='/cats/:catname' component={Wiggles} />

        <footer>
          our address
        </footer>
    </div>
  );
}

export default App;
