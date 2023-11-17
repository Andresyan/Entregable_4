import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div className='card-user'>
            {users.map((user)=> (
                <ul key={user.id}>
                    <div>
                    <li>{user.name} {user.lastName}</li>
                    <li>{user.dni}</li>
                    <li>{user.occupation}</li>
                    </div>
                    <div className='card-button'>
                    <button onClick={()=>{deleteUser(user.id)}} ><i className="fa-solid fa-trash"></i></button>
                    <button onClick={()=>selectUser(user)} ><i className="fa-solid fa-pen"></i></button>
                    </div>
                </ul>
            ))}
        </div>
    );
};

export default UsersList;
