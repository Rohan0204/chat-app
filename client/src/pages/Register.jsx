import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'
import { Link } from 'react-router-dom'

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
                <input type="text" placeholder='Username' name='username' value={data.username} onChange={handleUser} />
                <input type="password" placeholder='Password' name='password' value={data.password} onChange={handlePass} />
                <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleEmail} />
                <button className='register-btn' onClick={RegisterUser}>Register</button>
                <h2>Hi, {data.username}</h2>

                <span>Already have an account? <Link to={"/login"}>Login</Link> </span>
            </form>
        </div>
    )
}

export default Register