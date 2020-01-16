import React from 'react';
import {Link} from 'react-router-dom';
import Navlist from './Navlist';
import $ from 'jquery';
import logo from '../icons/dog.svg';

function Navbar () {
  return (
    <nav
      className="navbar is-white"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/">
            <img src={logo} alt="logo" width="112" height="28" />
          </Link>
        </div>
        <div
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">

          <Navlist linkTo="/" linkName="Home" />
          <Navlist linkTo="/doggo-registration" linkName="Doggo Registred List" />

        </div>
        <div className="navbar-end">
          {/* future sign up / login button can be implemented here */}
        </div>
      </div>
    </nav>
  );
}

$ (document).ready (function () {
  // Check for click events on the navbar burger icon
  $ ('.navbar-burger').click (function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $ ('.navbar-burger').toggleClass ('is-active');
    $ ('.navbar-menu').toggleClass ('is-active');
  });
});

export default Navbar;
