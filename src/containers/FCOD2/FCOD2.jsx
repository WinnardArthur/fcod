 import React from 'react';
 import './fcod2.css'
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Divider from '../../components/Divider/Divider';
import Partners from '../../components/Our partners/Partners';
import Footer from '../../components/Footer/Footer';
import Tabs from '../../components/Tabs/Tabs';
import FoodCollection from '../../components/FoodCollection/FoodCollection';
import SelectedFood from '../../components/SelectedFoods/SelectedFood';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const FCOD2 = () => {
    return (
        <div>
            <Header />
            <Divider />
            <Hero />
            <div className="tabContainer">
                <Tabs home/>
            </div>
            <div className="Home__navigationArea">
                <div className="activeIndicator">
                    
                </div>
            </div>
            <div className="foodCollection__container">
                <h3>Select your food</h3>
                <hr/>
                <FoodCollection />

                <h4>Selected Foods</h4>
                <div className="selectedFoodArea">
                    <div className="selectedFood__col-1">
                        <SelectedFood />
                    </div>
                    <div className="checks">
                        <h4>Check the</h4>
                        <a href="/fcod3" className="checkMoreBtn">
                            <h6>Environmental Nutrition Implications of your food choice (EnN Outlook)</h6>
                            <ArrowRightAltIcon />
                        </a>
                    </div>
                </div>
                
            </div>
            <Divider />
            <Partners />
            <Footer />
        </div>
    )
}

export default FCOD2
