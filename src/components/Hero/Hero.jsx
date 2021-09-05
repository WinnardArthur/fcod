import React from 'react';
import './hero.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Hero = () => {
    
    return (
        <div className="heroArea">
            <div className="heroWrapper">
                <div className="heroCards">
                    <OwlCarousel className="owl-theme items heroItems"
                        items="1"
                        autoplay
                        loop
                        margin={5}
                        nav
                    >
                        <div className="item">
                            <div className="heroOverlay"></div>
                            <img src="/assets/images/hero1.jpg" alt="heroImage" className="heroImage" />
                            <div className="heroContent">
                                <h1>Food Choices Overview DASHBOARD</h1>
                                <h4>A toolbox for choosing a healthy and environmentally sustainable diet</h4>
                            </div>
                        </div>

                        <div className="item">
                            <div className="heroOverlay"></div>
                            <img src="/assets/images/hero2.jpg" alt="heroImage" className="heroImage" />
                            <div className="heroContent">
                                <h1>Food Choices Overview DASHBOARD</h1>
                                <h4>A toolbox for choosing a healthy and environmentally sustainable diet</h4>
                            </div>
                        </div>

                        <div className="item">
                            <div className="heroOverlay"></div>
                            <img src="/assets/images/hero3.jpg" alt="heroImage" className="heroImage" />
                            <div className="heroContent">
                                <h1>Food Choices Overview DASHBOARD</h1>
                                <h4>A toolbox for choosing a healthy and environmentally sustainable diet</h4>
                            </div>
                        </div>
                        
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Hero
