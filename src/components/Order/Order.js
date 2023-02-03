import './order.css';
import React from 'react';
import Orders from './Orders';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            navigate('/login')
        } catch (error) {
            setError(error);
        }

    };

    const data = [
        {
            id: 1,
            title: 'Greek Salad',
            img: require('../../assets/greek salad.jpg'),
            price: '$' + 12.39,
            description: `The famous greek salad of crispy lettuce peppers, olives and our Chicago
                          style feta cheese, garnished with crunchy garlic and rosemary croutons`
        },
        {
            id: 2,
            title: 'Bruchetta Good',
            img: require('../../assets/bruschetta.jpg'),
            price: '$' + 5.59,
            description: `Our bruchetta is made from grilled bread that has been smeared with garlic
                            and seasoned with salt and olive oil.`
        },
        {
            id: 3,
            title: 'Lemon Dessert',
            img: require('../../assets/lemon dessert.jpg'),
            price: '$' + 5.05,
            description: `This comes straight from grandma's secret recipe book. Every last ingredient
                        has been sourced and is authentic as can be imagined.`
        },
        {
            id: 4,
            title: 'Greek Salad',
            img: require('../../assets/greek salad.jpg'),
            price: '$' + 12.39,
            description: `The famous greek salad of crispy lettuce peppers, olives and our Chicago
                          style feta cheese, garnished with crunchy garlic and rosemary croutons`
        },
    ];
    return (
        <React.Fragment>
            <section className='specials'>
                <div className='specials-header'>
                    <h2>The Special Order in ouer Restaurant!</h2>
                    <button onClick={handleSubmit}>
                        Order
                    </button>
                </div>
                <div className='special-offers'>
                    {
                        data.map((menu) => <Orders
                            key={menu.id}
                            title={menu.title}
                            img={menu.img}
                            price={menu.price}
                            description={menu.description}
                        />)
                    }
                </div>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Order
