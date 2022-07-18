import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div className='card-user'>
            {users.map((user)=> (
                <ul key={user.id}>
                    <div>
                    <li>{user.first_name} {user.last_name}</li>
                    <li>{user.email}</li>
                    <li><i className="fa-solid fa-cake-candles"></i>{user.birthday}</li>
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