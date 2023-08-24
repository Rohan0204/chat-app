import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { HashLoader } from 'react-spinners'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const navigate = useNavigate();
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
            try {
                const { email, password } = data;
                const value = await axios.post('http://localhost:3000/api/auth/user/login', {
                    email,
                    password
                })

                if (value.data.status === false) {
                    toast.error(value.data.message, toastOptions)
                }

                //setting Item to local storage 
                console.log(value.data);
                localStorage.setItem('username', value.data.username);
                localStorage.setItem('id', value.data.id);

                //navigating to chat page since we are authenticated with the platform 
                navigate('/chat');


            } catch (err) {
                console.log(err);
            }
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
                {loading ? <HashLoader color="#36d7b7" /> : (<><h1>LOGIN</h1>

                    <form className='form' onSubmit={LoginUser}>

                        <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleEmail} />
                        <input type="password" placeholder='Password' name='password' value={data.password} onChange={handlePass} />
                        <button type='submit' className='register-btn' onClick={LoginUser}>Login</button>
                        <h2>Hi, {data.email}</h2>

                    </form>
                    <span>Don't have an account? <Link to={"/register"}>Register</Link> </span>
                </>)}
            </div>
            <ToastContainer />
        </>
    )
}

export default Login