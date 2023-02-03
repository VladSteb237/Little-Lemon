import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppruvalAnimated from '../../assets/icons8-approval.gif';
import './booking.css';

const Confirm = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (AppruvalAnimated === true) return;
        const timer = setTimeout(() => {
            navigate("/")
        }, 3000)
        return () => clearTimeout(timer)

    }, [navigate])

    return (
        <div className='confirmbooking'>
            <div className='container'>
                <h1>Your have reserved table successfully!</h1>
                <img src={AppruvalAnimated} alt="AppruvalAnimated" />
            </div>
        </div>
    )
}

export default Confirm
