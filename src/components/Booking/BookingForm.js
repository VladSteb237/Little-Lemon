import React from 'react';
import './booking.css';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Confirm from './Confirm';

const BookingForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/confirm');
        <Confirm />
    };
    return (
        <React.Fragment>
            <div className='book'>
                <h1>Table Reservation Form</h1>
            </div>
            <section className='form'>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='field'>
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" id="res-date" />
                        </div>
                        <div className='field'>
                            <label for="res-time">Choose time</label>
                            <select id="res-time ">
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                        </div>
                        <div className='field'>
                            <label for="guests">Number of guests</label>
                            <input type="number" placeholder="1" min="1" max="10" id="guests" />
                        </div>
                        <div className='field'>
                            <label for="occasion">Occasion</label>
                            <select id="occasion">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                            </select>
                        </div>
                        <input type="submit"
                            value="Make Your reservation"
                            className='button'
                        />
                    </fieldset>
                </form>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default BookingForm
