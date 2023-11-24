import React from 'react';

const UsersList = ({ usersList, selectUser, deleteUser }) => {
  console.log('Users prop in UsersList:', usersList);
  return (
    <div className="card-user">
      <h1>Lista usuarios {usersList}</h1>
      
    </div>
  );
};

export default UsersList;

