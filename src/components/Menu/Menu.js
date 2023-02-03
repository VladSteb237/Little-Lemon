import React from 'react';
import Footer from '../Footer/Footer';
import './menu.css';

const Menu = () => {
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
            title: 'Bruchetta',
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
    ];

    return (
        <React.Fragment>
            <section className='specials'>
                <div className='specials-header'>
                    <h2>The Special this week!</h2>
                    {/* <button>Our Menu</button> */}
                </div>
                <div className='special-offers'>
                    {
                        data.map((menu) =>
                            <div className='menu-cards'>
                                <img src={menu.img} alt={menu.title} />
                                <div className='card-header'>
                                    <h3>{menu.title}</h3>
                                    <p>{menu.price}</p>
                                </div>
                                <div className='menu-description'>
                                    <p>{menu.description}</p>
                                </div>
                                <div className='card-footers'>
                                    <p><a href='/'>Order a delivery</a></p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
            <Footer />
        </React.Fragment>

    );
};

export default Menu
