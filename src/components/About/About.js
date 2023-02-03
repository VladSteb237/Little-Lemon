import React from 'react';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <React.Fragment>
            <section className='about'>
                <div className='about-info'>
                    <h2>Little Lemon</h2>
                    <h3>San Francisco</h3>
                    <p>
                        We are a family owned <br></br>
                        Mediterrenean Restaurant,<br></br>
                        focussed on traditional <br></br>
                        recipes, served with a modern twist.
                    </p>
                </div>
                <div className='about-img-ctn'>
                    <img src={require('../../assets/restaurant.jpg')} alt="founder" className='founder' />
                    <img src={require('../../assets/restaurantchef.jpg')} alt="co-founder" />
                </div>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default About
