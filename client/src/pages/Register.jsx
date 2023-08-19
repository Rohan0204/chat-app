import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: '',
        email: '',
        confpassword: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const toastOptions = {
        position: 'bottom-right',
        theme: 'dark',
        draggable: true,
        pauseOnHover: true,
        autoClose: 8000,
    }

    const RegisterUser = async (e) => {
        //API CALL to POST the data to database 
        e.preventDefault();


        if (handleValidation()) {
            const value = await axios.post("http://localhost:3000/api/auth/user/register", {
                username: data.username,
                password: data.password,
                email: data.email
            })
            if (value.data.status === false) {
                toast.error(value.data.message, toastOptions);
            }

            toast.success("Registered Successfully", toastOptions);
            navigate('/login');

            console.log(value.data)
        }

    }

    function handleValidation() {
        //if validated then call the API to submit the data to server 
        const { username, password, confpassword } = data;
        if (password !== confpassword) {
            //show error incorrect password
            toast.error("Password and Confirm Password should be same", toastOptions);
            return false;
        }
        else if (username.length < 3) {
            toast.error("Username should be greater than 3 Character ", toastOptions);
            return false;
        }
        else if (password.length < 6) {
            toast.error("Password must be greater than 6 characters", toastOptions);
            return false;
        }

        return true;
    }

    return (
        <div className='container'>
            <h1>Hey Buddy ! Let's register</h1>
            <form className='form' onSubmit={RegisterUser}>
                <input className='input-box' type="text" placeholder='Username' name='username' value={data.username} onChange={handleChange} />
                <input className='input-box' type="email" placeholder='Email' name='email' value={data.email} onChange={handleChange} />
                <input className='input-box' type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} />
                <input className='input-box' type="password" placeholder='Confirm Password' name='confpassword' value={data.confpassword} onChange={handleChange} />
                <button className='register-btn'>Register</button>
                <h2>Hi, {data.username}</h2>

                <span>Already have an account? <Link to={"/login"}>Login</Link> </span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Register