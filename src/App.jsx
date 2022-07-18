import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(()=>{
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const deselectUser = () => setUserSelected(null);

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
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
