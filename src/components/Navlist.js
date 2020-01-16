import React from 'react';
import {Link} from 'react-router-dom'

function Navlist (props) {
  return (
    <div>
      <Link to={props.linkTo}>
        {/* eslint-disable-next-line */}
        <a className="navbar-item">
          {props.linkName}
        </a>
      </Link>
    </div>
  );
}

export default Navlist;
