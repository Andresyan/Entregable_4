import React from 'react';


const UsersList = ({ usersList, selectUser, deleteUser }) => {
  console.log('Users prop in UsersList:', usersList?.users?.[1]);
  return (
    <div className="card-user">
      <h1>Lista usuarios</h1>
      
    </div>
  );
};

export default UsersList;

