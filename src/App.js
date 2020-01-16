import React from 'react';
import './css/App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import DoggoRegistrationPage from './components/DoggoRegistrationPage';
import {Switch, Route} from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/doggo-registration">
          <DoggoRegistrationPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
