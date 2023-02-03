import React from 'react';
import './home.css';

const MenuCard = (props) => {
    return (
        <section className='menu-card'>
            <img src={props.img} alt={props.title} />
            <div className='card-header'>
                <h3>{props.title}</h3>
                <p>{props.price}</p>
            </div>
            <div className='menu-description'>
                <p>{props.description}</p>
            </div>
            <div className='card-footer'>
                <p><a href='/order'>Order a delivery</a></p>
                <img src={require('../../assets/bicycle-solid.svg').default} alt={props.iconName} />
            </div>
        </section>
    );
};

export default MenuCard
