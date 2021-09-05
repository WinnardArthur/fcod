import React from 'react';
import './useful links.css';

const UsefulLink = () => {
    return (
        <div className="">
            <div class="ULFSE__section">
                <h1>Useful links for Food System Evaluations</h1>

                <div class="leftCircles">
                    <div class="bigGreenCircle">
                        <div class="smallWhiteCircle"></div>    
                    </div>
                    
                </div>
                <div class="rightCircles">
                    <div class="bigGreenCircle">
                        <div class="smallWhiteCircle"></div>
                    </div>
                </div>

            </div>

            <div class="FSE__section">
                <div class="emptyGreenTriangle"></div>
                <div class="FSE__cards">
                    <div class="FSE__card">
                        <img src="/assets/images/hero1.jpg" alt="" />
                        <div class="FSE__cardContent">
                            <h3>EnN Map</h3>
                            <p>It is matrix that uses nutrition indicators & 
                                environmental LCA of diet to determine ... 
                            </p>
                            <a href="#">Learn more</a>
                        </div>
                    </div>

                    <div class="FSE__card">
                        <img src="/assets/images/hero2.jpg" alt="" />
                        <div class="FSE__cardContent">
                            <h3>F-COD Board</h3>
                            <p>It uses nudging & process intelligence to influence consumer
                                decision at point of food purchase
                            </p>
                            <a href="#">Learn more</a>
                        </div>
                    </div>

                    <div class="FSE__card">
                        <img src="/assets/images/hero3.jpg" alt="" />
                        <div class="FSE__cardContent">
                            <h3>FoodSET</h3>
                            <p>It provides commodity specific technology with associated economic and environmental ...
                            </p>
                            <a href="#">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ULFSE__section">
                <div class="emptyWhiteTriangle"></div>
            </div>
            
        </div>
    )
}

export default UsefulLink
