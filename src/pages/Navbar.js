import React from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linkRef = useRef(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        const linksHeight = linkRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt="logo" className='logo' />
                    <button className='nav-toggle'
                        onClick={toggleLinks}
                    >
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linkRef}>
                        {
                            links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <ul className='social-icons'>
                    {
                        social.map((socialIcon) => {
                            const { id, url, icon } = socialIcon;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar
