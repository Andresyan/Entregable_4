import React from 'react';

const UsersList = ({ usersList, selectUser, deleteUser }) => {
  console.log('Users prop in UsersList:', usersList);
  return (
    <div className="card-user">
      <h1>Lista usuarios</h1>
      {usersList.users}
    </div>
  );
};

export default UsersList;

