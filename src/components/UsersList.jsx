import React from 'react';


const UsersList = ({ usersList, selectUser, deleteUser }) => {
  console.log('Users prop in UsersList:', usersList?.users?.[1].name);
  return (
    <div className="card-user">
      <h1>Users List</h1>
      <ul>
        {usersList?.users?.map((user) => (
          <li key={user.id}>
            <h4>{user.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

