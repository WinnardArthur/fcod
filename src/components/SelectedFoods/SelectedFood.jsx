import React from 'react';
import './selectedfood.css'

const SelectedFood = () => {
    return (
        <div className="selectedFoodSection">
            <div className="selectedFood">
                <img src="/assets/images/food3.jpg" alt="selected food" className="selectedFoodImg"/>
                <h5>Humburger</h5>
                <div className="foodOptions">
                    <div className="select">
                        <div className="innerSelect"></div>
                    </div>
                    <div>
                        <img src="/assets/images/heart.svg" alt="food" className="favoriteBtn"/>
                    </div>
                </div>
            </div>
            <div className="selectedFood__options">
                <button className="addFoodBtn">Add another food</button>
                <button className="wrongBtn">
                    <img src="/assets/images/wrong-mark.png" alt="wrong mark" />
                    <h5>Remove meal</h5>
                </button>
                <button className="correctBtn">
                    <img src="/assets/images/correct.png" alt="correct mark" />
                    <h5>Confirm meal</h5>
                </button>
            </div>
        </div>
    )
}

export default SelectedFood
