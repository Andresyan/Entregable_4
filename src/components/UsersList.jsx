import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div className='card-user'>
            console.log(users);
            {users.map((user)=> (
                <ul key={user.id}>
                    <div>
                    <li>{user.name}</li>
                    //<li>{user.dni}</li>
                    //<li>{user.occupation}</li>
                    </div>
                    
                </ul>
            ))}
        </div>
    );
};
//<div className='card-button'>
                    //<button onClick={()=>{deleteUser(user.id)}} ><i className="fa-solid fa-trash"></i></button>
                    //<button onClick={()=>selectUser(user)} ><i className="fa-solid fa-pen"></i></button>
                    //</div>
export default UsersList;
