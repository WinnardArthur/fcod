import React from 'react'
import './mealtypebar.css'

const MealTypeBar = () => {
    return (
        <div className="mealTypeSection">
            <a href="#" className="goBackBtn">
                Back
            </a>
            <div className="mealType">
                <div className="mealTypeCol">
                    <img src="/assets/images/food-photographer-jennifer-pallian-FT7fjyEyqv0-unsplash.jpg" alt="meal type" />
                    <h5>Fish & Chips</h5>
                </div>
                <div className="mealTypeCol">
                    <h5>Type of meal: Breakfast</h5>
                </div>
            </div>
            
        </div>
    )
}

export default MealTypeBar
