import React from 'react';
import './Card.css';

function Card(props) {
    const {name, age} = props;
    
  

    return (
        <div className='card'>
            <p>I'am {name}'s a card!, age {age}</p>
           
        </div>
    )
}

export default Card;


