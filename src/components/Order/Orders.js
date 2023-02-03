import React from 'react';
import './order.css';

const Orders = (props) => {
    return (
        <React.Fragment>
            <section className='menu-card'>
                <img src={props.img} alt={props.title} key={props.id} />
                <div className='card-header'>
                    <h2>{props.title}</h2>
                    <p>{props.price}</p>
                </div>
                <div className='menu-description'>
                    <p>{props.description}</p>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Orders
