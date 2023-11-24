import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div className='card-user'>
            {users.map((user)=>(user.name))}
            console.log(user);
            
        </div>
    );
};

export default UsersList;
