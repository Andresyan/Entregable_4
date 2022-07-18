import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const UsersForm = ({
    getUsers,
    userSelected,
    deselectUser
}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (userSelected !== null) {
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setDate(userSelected.birthday);
        }
    }, [userSelected]);

    const submit = (e) => {
        e.preventDefault();
        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday: date
        };
        if (userSelected !== null) {
            axios
                .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers();
                    reset();
                    deselectUser();
                });
        } else {
            axios
                .post("https://users-crud1.herokuapp.com/users/", user)
                .then(() => {
                    getUsers();
                    reset();
                })
                .catch((error) => console.log(error.response));
        }
    };

    const reset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setDate("");
    };

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
                <label htmlFor="firstName"></label>
                <input
                    type="text"
                    id="firstName" placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
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
                <label htmlFor="email"></label>
                <i className="fa-solid fa-envelope"></i>
                <input
                    type="text"
                    id="email" placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="input-container">
                <label htmlFor="password"></label>
                <i className="fa-solid fa-lock"></i>
                <input
                    type="password"
                    id="password" placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div className="input-container">
                <label htmlFor="date"></label>
                <i className="fa-solid fa-cake-candles"></i>
                <input
                    type="date"
                    id="date" placeholder='Birthday'
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </div>
            <div className='button-content'>
            <button>{userSelected !== null ? "Update" : "Create"}</button>
            <button onClick={clear} type="button"> Clear</button>
            </div>
        </form>
    );
};

export default UsersForm;