import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import './Contacts.css'

const Contacts = ({ username = "NONE" }) => {



    const handleContactClick = () => {
        alert(`User : ${username}`)
    }


    return (
        <>
            <div className='contacts-container'>
                <div className='contact-detail' onClick={handleContactClick}>
                    {/* CONTACT ICON  */}
                    <div className='contact-icon'>

                        <FaUserCircle size={30} color='' style={{ marginRight: "15px" }} />
                    </div>
                    {/* Username */}
                    <div className='contact-name'>
                        {username}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contacts