import React from 'react';
import '../Home/home.css';
import { useState } from 'react';
import Specials from './Specials';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            navigate('/bookingform')
        } catch (error) {
            setError(error);
        }

    };
    return (
        <>
            <section className='hero'>
                <div className='hero-summary'>
                    <h2>Little Lemon</h2>
                    <h3>San Francisco</h3>
                    <p>
                        We are a family owned <br></br>
                        Mediterrenean Restaurant,<br></br>
                        focussed on traditional <br></br>
                        recipes, served with a modern twist.
                    </p>
                    <button onClick={handleSubmit}>
                        Reserve a Table
                    </button>
                </div>
                <div className='hero-photo'>
                    <img src={require('../../assets/restauranfood.jpg')} alt="restaurant food" />
                </div>
            </section>
            <Specials />
        </>
    );
};

export default Home
