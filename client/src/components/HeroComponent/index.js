import React from 'react';
import './style.css'
import Button from '../Button'

function HeroComponent() {
    return(
        <div className='hero-container'>
            <h1>Ready to find some books?</h1>
            <div className='hero-btn'>
            <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
            Lets do it!
            </Button>
        </div>
                 
       </div>
    );
};

export default HeroComponent