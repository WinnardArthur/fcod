import React from 'react';
import './usetool.css'

const Usetool = () => {
    return (
        <div className="useToolSection">
            <h1>Who can use this tool?</h1>
            <div className="people__useTools">
                <div className="people__useTool">
                    <img src="/assets/images/vitolda-klein-AMHnFvAlg_s-unsplash(1).jpg" alt="person" className="people__useToolImg" />
                    <div className="people__useToolIndicator"></div>
                    <p>Children</p>
                </div>
                <div className="people__useTool">
                    <img src="/assets/images/bbh-singapore-Il4aIyNpzaM-unsplash(1).jpg" alt="person" className="people__useToolImg" />
                    <div className="people__useToolIndicator"></div>
                    <p>Women</p>
                </div>
                <div className="people__useTool">
                    <img src="/assets/images/loly-galina-PPEptzBa44Q-unsplash.jpg" alt="person" className="people__useToolImg" />
                    <div className="people__useToolIndicator"></div>
                    <p>Households</p>
                </div>
            </div>
            <a href="#" className="useToolBtn">Try Now</a>
        </div>
    )
}

export default Usetool
