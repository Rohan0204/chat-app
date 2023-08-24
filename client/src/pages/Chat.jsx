import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import Contacts from '../components/Contacts';
import "./Chat.css"

const Chat = () => {

    const [currentUser, setCurrentUser] = useState('');
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
    useEffect(() => {
        setCurrentUser(localStorage.getItem('username'));
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        navigate('/')

    }

    let friends = ['mohan', 'alex', 'michael', 'harry', 'john'];
    const dost = 'David';

    return (

        <div className='chat-container'>
            {
                loading ? <HashLoader color="#36d7b7" /> : (<>
                    <div className='chat-nav'>
                        {`Hey ${currentUser}, Welcome! Let's connect `}
                        <button className='logout-btn' onClick={handleLogOut}>LOGOUT</button>
                    </div>
                    <div className='chat-section'>
                        <div className='contact-section'>
                            {
                                friends.map(friend => <Contacts username={friend} />)
                            }

                        </div>
                        <div className='chat-area'>
                            What you waiting for ? Let's Start messaging
                        </div>
                    </div>
                </>)
            }

        </div>
    )
}

export default Chat