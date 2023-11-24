import React from 'react';


const UsersList = ({ usersList, selectUser, deleteUser }) => {
  console.log('Users prop in UsersList:', usersList?.users?.[1].name);
  return (
    <div className="users-list">
      <h1>Users List</h1>
        {usersList?.users?.map((user) => (
          <ul key={user.id}>
            <h4>{user.id}</h4>
            <div>
              <b>name: </b>
              {user.name}
            </div>
            <div>
              <b>last name: </b>
              {user.lastName}
            </div>
            <div>
              <b>DNI: </b>
              {user.dni}
            </div>
            <div>
              <b>Occupation </b>
              {user.occupation}
            </div>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => selectUser(user)}>Select</button>
          </ul>
        ))}
    </div>
  );
};

export default UsersList;

