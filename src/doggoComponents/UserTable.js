import React, {Fragment} from 'react';
import logo from '../icons/dog.svg';

const UserTable = props => (
  <Fragment>
    {props.users.map (user => (
      <div className="doggo-list-box">
        <div className="columns">
          <div className="column">
            <img src={logo} alt="logo" width="112" height="28" />
          </div>

          <div className="column is-8" key={user.id}>
            <p><strong>{user.name}</strong></p>
            <p>Age: {user.age}</p>
            <p>Description: {user.description}</p>
            {/* incomplete */}
            {/* <p>Doggo id: {user.doggo_id.first + '...' + user.doggo_id.last}</p> */} 
            <p>Doggo id: {user.doggo_id}</p>
          </div>

          <div className="column">
            <button
              onClick={() => {
                props.editRow (user);
              }}
              className="button muted-button"
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteUser (user.id)}
              className="button muted-button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </Fragment>
);

export default UserTable;
