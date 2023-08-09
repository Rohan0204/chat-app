import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/login');
    }

    function handleRegister() {
        navigate('/register');
    }

    return (
        <div className='container'>
            <div className='content-container'>
                <h1>Welcome to Chatty</h1>
                <h2>Connect with your friends and have fun</h2>
                <div className='button-container'>

                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleRegister}>Register</button>
                </div>
            </div>

        </div >
    )
}

export default Home