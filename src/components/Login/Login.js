import React from 'react';
import './login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (input.username === '' && input.password === '') {
                alert('Please enter your username and password');
            } else {
                alert('Congratulations You have successfully logged in!');
                navigate('/')
            }


        } catch (error) {
            setError(error);
        }

    };
    return (
        <>
            <div className='auth'>
                <h1 id='h1'>Login</h1>
                <form id='form'>
                    <input
                        id='input'
                        required type="text"
                        name='username'
                        placeholder='username...'
                        onChange={handleChange}
                    />
                    <input
                        id='input'
                        required type="password"
                        name='password'
                        placeholder='password...'
                        onChange={handleChange}
                    />
                    <button id='button' onClick={handleSubmit}>
                        Login
                    </button>
                    {error && <p id='p'>{error}</p>}
                    <span id='span'>
                        Don't you have an account?
                        <Link to='/'> Register </Link>
                    </span>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Login
