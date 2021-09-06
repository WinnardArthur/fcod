import React from 'react';
import './info.css';

const Info = () => {
    return (
        <div className="infoSection">
            <div className="blobContainer">
                <img src="/assets/images/food-photographer-jennifer-pallian-FT7fjyEyqv0-unsplash.png" alt="infoImage" className="infoImage" />
            </div>
            <div className="infoContent">
                <h5>Did you know that about 7 out of 10 deaths in the United States 
                    related to your diet choice 
                </h5>
                <a href="/fcod2">Use Now</a>
            </div>
        </div>
    )
}

export default Info
