import React, { useState } from 'react'

const Login = () => {
    const [data, setData] = useState({
        username: '',
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

    const LoginUser = (e) => {
        e.preventDefault();
        //API call to check whether user exit or not a
        //if exist route to the chat screen

    }


    return (
        <>
            <div className='container'>
                <h1>LOGIN</h1>
                <form className='form' onSubmit={LoginUser}>

                    <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleEmail} />
                    <input type="password" placeholder='Password' name='password' value={data.password} onChange={handlePass} />
                    <button className='register-btn' onClick={LoginUser}>Login</button>
                    <h2>Hi, {data.username}</h2>

                </form>
            </div>
        </>
    )
}

export default Login