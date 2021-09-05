import React, { useState } from 'react';
import './foodcollection.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const FoodCollection = () => {

    const [responsive, setResponsive] = useState({
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        }
    })

    return (
        <div className="foodCollections">
            <div>
                <div className="foods">
                    <OwlCarousel className="owl-theme foodItems"
                        items="3"
                        autoplay 
                        loop
                        margin={10}
                        nav
                        dots={false}
                        responsive = {responsive}
                    >
                        <div className="foodItem item">
                            <img src="/assets/images/food2.JPG" alt="food" className="foodItemImage"/>
                            <h5>Humburger</h5>
                            <div className="foodOptions">
                                <div className="select">
                                    <div className="innerSelect"></div>
                                </div>
                                <div>
                                    <img src="/assets/images/tray.png" alt="food" className="favoriteBtn"/>
                                </div>
                            </div>
                        </div>

                        <div className="foodItem">
                            <img src="/assets/images/food3.jpg" alt="food" className="foodItemImage"/>
                            <h5>Humburger</h5>
                            <div className="foodOptions">
                                <div className="select">
                                    <div className="innerSelect active"></div>
                                </div>
                                <div>
                                    <img src="/assets/images/tray.png" alt="food" className="favoriteBtn"/>
                                </div>
                            </div>
                        </div>

                        <div className="foodItem">
                            <img src="/assets/images/Topping from vegetable pizza.jpg" alt="food" className="foodItemImage"/>
                            <h5>Humburger</h5>
                            <div className="foodOptions">
                                <div className="select">
                                    <div className="innerSelect"></div>
                                </div>
                                <div>
                                    <img src="/assets/images/tray.png" alt="food" className="favoriteBtn"/>
                                </div>
                            </div>
                        </div>

                        <div className="foodItem">
                            <img src="/assets/images/food3.jpg" alt="food" className="foodItemImage"/>
                            <h5>Humburger</h5>
                            <div className="foodOptions">
                                <div className="select">
                                    <div className="innerSelect active"></div>
                                </div>
                                <div>
                                    <img src="/assets/images/tray.png" alt="food" className="favoriteBtn"/>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>
            </div>
        </div>
    )
}

export default FoodCollection
