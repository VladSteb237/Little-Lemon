import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo-ctn'>
                <img src={require('../../assets/footer-logo.png')} alt="footer logo" className='footer-logo' />
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/bookingform'>Reservation</Link></li>
                <li><Link to='/order'>Order</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            <div>
                <h3>Contacts</h3>
                <ul>
                    <li className='footer-contacts'> Address: <span>22 Chicago Way, IL, Chicago</span> </li>
                    <li className='footer-contacts'> Phone Number:  <span>+01123456798</span> </li>
                    <li className='footer-contacts'> Email:  <span>contact@litlelemon.rest</span></li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <li><a href='#meta'><img alt='' src={require('../../assets/facebook.svg').default}></img></a></li>
                <li><a href='#instagram'><img alt='' src={require('../../assets/instagram.svg').default}></img></a></li>
                <li><a href='#meta'><img alt='' src={require('../../assets/twitter.svg').default}></img></a></li>
            </div>
        </footer >
    );
};

export default Footer
