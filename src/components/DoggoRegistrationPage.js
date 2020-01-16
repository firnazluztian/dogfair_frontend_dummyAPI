import React, {useState} from 'react';
import AddUserForm from '../doggoComponents/AddUserForm';
import EditUserForm from '../doggoComponents/EditUserForm';
import UserTable from '../doggoComponents/UserTable';

const DoggoRegistrationPage = () => {
  // Dummy Data
  const usersData = [
    {
      id: 1,
      name: 'Shiba inu',
      age: 2,
      description: 'also called doge',
      doggo_id: 'J123456c',
      //   doggo_id: {
      //     first: 'J',
      //     last: '456c',
      //   },
    },
    {
      id: 2,
      name: 'Husky',
      age: 5,
      description: 'also called moon moon',
      doggo_id: 'J654321a',
      //   doggo_id: {
      //     first: 'J',
      //     last: '654a',
      //   },
    },
  ];

  const initialFormState = {
    id: null,
    name: '',
    age: null,
    description: '',
    doggo_id: '',
  };

  // Setting state
  const [users, setUsers] = useState (usersData);
  const [currentUser, setCurrentUser] = useState (initialFormState);
  const [editing, setEditing] = useState (false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers ([...users, user]);
  };

  const deleteUser = id => {
    setEditing (false);
    setUsers (users.filter (user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing (false);
    setUsers (users.map (user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing (true);
    setCurrentUser ({
      id: user.id,
      name: user.name,
      age: user.age,
      description: user.description,
      doggo_id: user.doggo_id,
    });
  };

  return (
    <div className="container-fluid" style={{padding: '2em'}}>
      <div className="columns">
        <div className="column">
          {editing
            ? <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            : <AddUserForm addUser={addUser} />}
        </div>
        <div className="column">
          <h2 style={{color: 'white'}}>View registered Doggos</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>

    </div>
  );
};

export default DoggoRegistrationPage;
