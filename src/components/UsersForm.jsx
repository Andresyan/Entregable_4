import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const UsersForm = ({
    getUsers,
    userSelected,
    deselectUser
}) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dni, setDni] = useState("");
    const [occupation, setOccupation] = useState("");
    
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    //const [date, setDate] = useState("");

    useEffect(() => {
        if (userSelected !== null) {
            setName(userSelected.name);
            setLastName(userSelected.last_name);
            setDni(userSelected.dni);
            setOccupation(userSelected.occupation);
        }
    }, [userSelected]);
    //setDate(userSelected.birthday);
    const submit = (e) => {
        e.preventDefault();
        const user = {
            name: name,
            last_name: lastName,
            dni,
            occupation
        };
        if (userSelected !== null) {
            axios
                .put(`https://tasks22.onrender.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers();
                    reset();
                    deselectUser();
                });
        } else {
            axios
                .post("https://tasks22.onrender.com/users/", user)
                .then(() => {
                    getUsers();
                    reset();
                })
                .catch((error) => console.log(error.response));
        }
    };

    const reset = () => {
        setName("");
        setLastName("");
        setDni("");
        setOccupation("");    
    };
    //setDate("");
    const clear = () => {
        reset();
        deselectUser();
    }

    return (
        <form onSubmit={submit}>
            <h1>New User</h1>
            <div className='names-content'>
            <i className="fa-solid fa-user"></i>
            <div className="name-container">
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name" placeholder='FirstName'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </div>
            <div className="name-container">
                <label htmlFor="lastName"></label>
                <input
                    type="text"
                    id="lastName" placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />
            </div>
            </div>
            <div className="input-container">
                <label htmlFor="dni"></label>
                <i className="fa-solid fa-user"></i>
                <input
                    type="number"
                    id="dni" placeholder='Dni'
                    onChange={(e) => setDni(e.target.value)}
                    value={dni}
                />
            </div>
            <div className="input-container">
                <label htmlFor="occupation"></label>
                <i className="fa-solid fa-user"></i>
                <input
                    type="text"
                    id="occupation" placeholder='Occupation'
                    onChange={(e) => setOccupation(e.target.value)}
                    value={occupation}
                />
            </div>
            <div className='button-content'>
            <button>{userSelected !== null ? "Update" : "Create"}</button>
            <button onClick={clear} type="button"> Clear</button>
            </div>
        </form>
    );
};

            // <div className="input-container">
            //    <label htmlFor="date"></label>
            //    <i className="fa-solid fa-cake-candles"></i>
            //    <input
            //        type="date"
            //        id="date" placeholder='Birthday'
            //        onChange={(e) => setDate(e.target.value)}
            //        value={date}
            //    />
            // </div>

export default UsersForm;
