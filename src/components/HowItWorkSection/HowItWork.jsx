import React from 'react';
import './howitwork.css';

const HowItWork = () => {
    return (
        <div className="HowItWork__Section">
            <h1>How it work?</h1>
            <div className="HowItWork__Circles">
                <div className="HowItWork__Circle">
                    <img src="/assets/images/tray.png" alt="person" className="HowItWork__Img" />
                    <h5>Select your meal</h5>
                </div>
                <div className="arrowDirection"></div>
                <div className="HowItWork__Circle top__circle" style={{backgroundColor: '#cfcf57'}}>
                    <img src="/assets/images/1201558.png" alt="person" className="HowItWork__Img" />
                    <h5>Assess Impact</h5>
                </div>
                <div className="arrowDirection"></div>
                <div className="HowItWork__Circle" style={{backgroundColor: '#6eb574'}} >
                    <img src="/assets/images/investment.png" alt="person" className="HowItWork__Img" />
                    <h5>Make meal decision</h5>
                </div>
            </div>
            <a href="#" className="useToolBtn">Try Now</a>
        </div>
    )
}

export default HowItWork
