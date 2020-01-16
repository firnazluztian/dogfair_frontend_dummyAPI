import React from 'react';
import logo from '../icons/dog.svg';
import RegisterButton from '../components/RegisterButton.js';
import Footer from './Footer'

function HomePage () {
  return (
    <header className="App-header">
      <div className="columns">
        <div className="column">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="column">

          <p style={{marginTop: 50, marginBottom: 50}}>
            Doggo Fair Registration Console:
            Create, Read, Update and Delete doggo registrations
          </p>

          <RegisterButton btnName="Register new doggo" btnColor="is-primary" />

        </div>
      </div>
      <Footer />
    </header>
   
  );
}

export default HomePage;
