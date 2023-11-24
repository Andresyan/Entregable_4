import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

function App() {
  const [users, setUsers] = useState({ data: [] });

  const [userSelected, setUserSelected] = useState(null);

  useEffect(()=>{
    axios
      .get("https://tasks22.onrender.com/api/v1/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://tasks22.onrender.com/api/v1/users/")
      .then((res) => setUsers(res.data));
  };
  console.log(users);
  const selectUser = (user) => {
    setUserSelected(user);
  };

  const deselectUser = () => setUserSelected(null);

  const deleteUser = (id) => {
    axios
      .delete(`https://tasks22.onrender.com/api/v1/users/${id}/`)
      .then(() => getUsers());
  };

  return (
    <div className="App">
      <div className='list-container'>
      <UsersList users={users} selectUser={selectUser} deleteUser={deleteUser} />
      </div>
      <div className='form-container'>
      <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser}/>
      </div>
    </div>
  )
}

export default App
