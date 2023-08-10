import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''

    })

    const handleEmail = (e) => {
        setData({
            ...data,
            email: e.target.value
        })
    }

    const handlePass = (e) => {
        setData({
            ...data,
            password: e.target.value
        })
    }

    const toastOptions = {
        position: 'bottom-right',
        theme: 'dark',
        draggable: true,
        pauseOnHover: true,
        autoClose: 8000,
    }

    const LoginUser = async (e) => {
        e.preventDefault();
        //API call to check whether user exit or not a
        //if exist route to the chat screen

        if (validation()) {
            const value = await axios.get('http://localhost:3000/api/auth/user/login', {
                email: data.email,
                password: data.password
            })
                .then(() => toast.success("Login Successfully!"))
                .catch(err => console.log(err))

            console.log(value)
        }

    }

    const validation = () => {
        const { email, password } = data;
        if (email.length <= 0) {
            toast.error("Email is required", toastOptions);
            return false;
        }
        else if (password.length <= 0) {
            toast.error("Password is required", toastOptions);
            return false;
        }

        return true;

    }


    return (
        <>
            <div className='container'>
                <h1>LOGIN</h1>
                <form className='form' onSubmit={LoginUser}>

                    <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleEmail} />
                    <input type="password" placeholder='Password' name='password' value={data.password} onChange={handlePass} />
                    <button className='register-btn' onClick={LoginUser}>Login</button>
                    <h2>Hi, {data.email}</h2>

                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login