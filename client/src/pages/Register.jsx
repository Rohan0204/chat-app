import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'

const Register = () => {

    const [data, setData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleUser = (e) => {
        setData({
            ...data,
            username: e.target.value
        })
    };

    const handlePass = (e) => {
        setData({
            ...data,
            password: e.target.value
        });
    }
    const handleEmail = (e) => {
        setData({
            ...data,
            email: e.target.value
        });
    }

    function RegisterUser(e) {
        //API CALL to POST the data to database 
        e.preventDefault();
        alert("Posted data to database");

        axios.post('http://localhost:3000/user', {
            username: data.username,
            password: data.password,
            email: data.email
        })
            .then(() => alert("Successfully registered !"))
            .catch(err => console.log(err))

    }

    return (
        <div className='container'>
            <h1>Hey Buddy ! Let's register</h1>
            <form className='form' onSubmit={RegisterUser}>
                <input placeholder='Username' name='username' value={data.username} onChange={handleUser} />
                <input placeholder='Password' name='password' value={data.password} onChange={handlePass} />
                <input placeholder='Email' name='email' value={data.email} onChange={handleEmail} />
                <button className='register-btn' onClick={RegisterUser}>Register</button>
                <h1>Hi, {data.username} {data.email}</h1>
            </form>
        </div>
    )
}

export default Register