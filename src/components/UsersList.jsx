import React from 'react';

const UsersList = ({ users, selectUser, deleteUser }) => {
  console.log('Users prop in UsersList:', users);
  return (
    <div className="card-user">
      <h1>Lista usuarios</h1>
      <ul>
        {Array.isArray(users.data.data) && users.data.data.map((user) => (
          <li key={user.id}>
            <h4>{user.id}</h4>
            <div>
              <b>name: </b>
              {user.name}
            </div>
            <div>
              <b>dni: </b>
              {user.dni}
            </div>
            <button onClick={() => deleteUser(user)}>Delete</button>
            <button onClick={() => selectUser(user)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

