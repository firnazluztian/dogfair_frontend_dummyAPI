import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';

const EditUserForm = props => {
  const {handleSubmit, register, errors} = useForm ();
  const [user, setUser] = useState (props.currentUser);

  useEffect (
    () => {
      setUser (props.currentUser);
    },
    [props]
  );

  const handleInputChange = event => {
    const {name, value} = event.target;

    setUser ({...user, [name]: value});
  };

  const onSubmit = event => {
    //event.preventDefault ();
    props.updateUser (user.id, user);
    alert (user.doggo_id + ' has succesfully been edited');
  };

  return (
    <div className="container">
      <div className="reg-container">
        <form onSubmit={handleSubmit (onSubmit)}>
          <p>Edit doggo registration</p>
          <div className="column">
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              ref={register ({
                required: 'Name is required',
                pattern: {
                  value: '',
                  message: 'Please input valid name',
                },
              })}
            />
            <p className="has-text-danger">
              {errors.name && errors.name.message}
            </p>
          </div>

          <div className="column">
            <input
              type="number"
              className="input"
              placeholder="Age"
              name="age"
              value={user.age}
              onChange={handleInputChange}
              ref={register ({
                required: 'Age is required',
                min: 0,
                max: 100,
                pattern: {
                  value: '',
                  message: 'Age must be within 0-100',
                },
              })}
            />
            <p className="has-text-danger">
              {errors.age && errors.age.message}
            </p>
          </div>

          <div className="column">
            <input
              type="text"
              className="input"
              placeholder="Description"
              name="description"
              value={user.description}
              onChange={handleInputChange}
              ref={register ({
                required: 'Description is required, up to 100 letters',
                maxLength: 100,
                pattern: {
                  value: '',
                  message: 'Description is only up to 100 letters',
                },
              })}
            />
            <p className="has-text-danger">
              {errors.description && errors.description.message}
            </p>
          </div>

          <div className="column">
            <input
              type="text"
              className="input"
              placeholder="Doggo id"
              name="doggo_id"
              value={user.doggo_id}
              onChange={handleInputChange}
              ref={register ({
                required: 'Doggo ID is required',
                pattern: {
                  value: /(J)(\d{6})([a-d])/g,
                  message: 'Invalid id format, starts with capital letter J, followed by any 6 digits number, and ends with any lowercase letter from a to d',
                },
              })}
            />
            <p className="has-text-danger">
              {errors.doggo_id && errors.doggo_id.message}
            </p>
          </div>
          <button className="button is-primary">Update user</button>
          <button
            className="button is-primary"
            onClick={() => props.setEditing (false)}
            className="button muted-button"
          >
            Cancel
          </button>
        </form>
      </div>

    </div>
  );
};

export default EditUserForm;
