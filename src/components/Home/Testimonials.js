import React from 'react';
import ReviewCard from './ReviewCard';
import About from '../About/About';
import './home.css';

const Testimonials = () => {

    const reviewInfo = [
        {
            id: '1',
            heading: 'Rating :',
            rating: '⭐⭐⭐⭐⭐',
            img: require('../../assets/dou.jpg'),
            name: 'Jason Meffy',
            reviewText: `LitleLemon San Francisco serves the most delicious meals at a very pocket 
                            friendly price. I give them a five out of five`
        },

        {
            id: '2',
            heading: 'Rating :',
            rating: '⭐⭐⭐',
            img: require('../../assets/john.jpg'),
            name: 'Jason Meffy',
            reviewText: `LitleLemon San Francisco serves the most delicious meals at a very pocket 
                            friendly price. I give them a five out of five`
        },

        {
            id: '3',
            heading: 'Rating :',
            rating: '⭐⭐⭐⭐',
            img: require('../../assets/pipa.jpg'),
            name: 'Jason Meffy',
            reviewText: `LitleLemon San Francisco serves the most delicious meals at a very pocket 
                            friendly price. I give them a five out of five`
        },

        {
            id: '4',
            heading: 'Rating :',
            rating: '⭐⭐',
            img: require('../../assets/ivan.jpg'),
            name: 'Jason Meffy',
            reviewText: `LitleLemon San Francisco serves the most delicious meals at a very pocket 
                            friendly price. I give them a five out of five`
        }
    ];

    return (
        <React.Fragment>
            <section className='testimonials'>
                <h2>Testimonials</h2>
                <div className='rewiews-ctn'>
                    {
                        reviewInfo.map((info) => <ReviewCard
                            id={info.id}
                            heading={info.heading}
                            rating={info.rating}
                            img={info.img}
                            name={info.name}
                            reviewText={info.reviewText}
                        />)
                    }
                </div>
            </section>
            <About />
        </React.Fragment>
    );
};

export default Testimonials
