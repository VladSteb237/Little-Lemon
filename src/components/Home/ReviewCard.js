import React from 'react';
import './home.css';

const ReviewCard = (props, id) => {
    return (
        <React.Fragment>
            <section className='rewiew-card'>
                <div>
                    <h3 key={id}>{props.heading}</h3>
                    <p key={props.id}>{props.rating}</p>
                </div>
                <div>
                    <img src={props.img} alt="pictures" className='picture' key={props.id} />
                    <p key={props.id} className='name'>{props.name}</p>
                </div>
                <p key={props.id}>{props.reviewText}</p>
            </section>
        </React.Fragment>

    );
};

export default ReviewCard
