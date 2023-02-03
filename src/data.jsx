import { FaFacebook, FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa';
import React from 'react';

export const links = [
    {
        id: 1,
        url: '/',
        text: 'home'
    },
    {
        id: 2,
        url: '/about',
        text: 'about'
    },
    {
        id: 3,
        url: '/menu',
        text: 'menu'
    },
    {
        id: 4,
        url: '/bookingform',
        text: 'reservation'
    },
    {
        id: 5,
        url: '/order',
        text: 'order'
    },
    {
        id: 6,
        url: '/login',
        text: 'login'
    },
];

export const social = [
    {
        id: 1,
        url: 'https://facebook.com/',
        icon: <FaFacebook />
    },
    {
        id: 2,
        url: 'https://twitter.com/',
        icon: <FaTwitter />
    },
    {
        id: 3,
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin />
    },
    {
        id: 4,
        url: 'https://www.behance.com',
        icon: <FaBehance />
    },
];