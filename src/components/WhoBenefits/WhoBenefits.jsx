import React from 'react';
import './whobenefits.css'

const WhoBenefits = () => {
    return (
        <div className="whoBenefitSection">
            <h1>What are the benefits?</h1>
            <div className="whoBenefits">
                <div className="whoBenefit">
                    <img src="/assets/images/jamie-street-vcn2ndJ5LwE-unsplash.jpg" alt="person" className="whoBenefit__Img" />
                    <div className="whoBenefit__Indicator"></div>
                    <p>Helps you make choices that promise healthy living</p>
                </div>
                <div className="whoBenefit">
                    <img src="/assets/images/markus-spiske-GnxktpZHjcM-unsplash.jpg" alt="person" className="whoBenefit__Img" />
                    <div className="whoBenefit__Indicator"></div>
                    <p>Helps you make choices that promise environmental sustainability</p>
                </div>
                <div className="whoBenefit">
                    <img src="/assets/images/bill-oxford-rdLERs3ZGgQ-unsplash.jpg" alt="person" className="whoBenefit__Img" />
                    <div className="whoBenefit__Indicator"></div>
                    <p>Helps you make choices that ensure planet safety</p>
                </div>
            </div>
        </div>
    )
}

export default WhoBenefits
