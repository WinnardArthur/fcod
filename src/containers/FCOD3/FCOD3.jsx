import React from 'react';
import Divider from '../../components/Divider/Divider';
import FoodCollection from '../../components/FoodCollection/FoodCollection';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HealthandEnvironment from '../../components/HealthAndEnvironment/HealthandEnvironment';
import Hero from '../../components/Hero/Hero';
import MealTypeBar from '../../components/MeatTypeBar/MealTypeBar';
import Partners from '../../components/Our partners/Partners';
import OverallSustainabilityAdvisory from '../../components/OverallSustainabilityAdvisory/OverallSustainabilityAdvisory';
import Tabs from '../../components/Tabs/Tabs';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import './fcod3.css'

const FCOD3 = () => {
    return (
        <div>
            <Header />
            <Divider />
            <Hero />
            <div className="FCOD3__body">
            <Tabs />
            <div className="navigationArea">
                <MealTypeBar />
                <div className="activeIndicator">
                    
                </div>
            </div>
            <hr className="pageUnderline"/>
            <HealthandEnvironment />
            <hr className="pageUnderline" />
            <OverallSustainabilityAdvisory />
            <hr className="pageUnderline" />
            <div className="chooseAnotherFood">
                <h3>Choose Another Food</h3>
                <div className="chooseAnotherFoodContainer">
                    <div className="col-1">
                        <FoodCollection />
                    </div>

                    <div className="dietChecks">
                        <h3>Check your</h3>
                        <a href="#" className="dietChecksLink">
                            <h5>Diet Quality</h5>
                            <ArrowRightAltIcon />
                        </a>
                        <a href="#" className="dietChecksLink">
                            <h5>Diet Quality</h5>
                            <ArrowRightAltIcon />
                        </a>
                        <a href="#" className="dietChecksLink">
                            <h5>Diet Quality</h5>
                            <ArrowRightAltIcon />
                        </a>
                    </div>
                </div> 
                
            </div>
            </div>
            <Divider />
            <Partners />
            <Footer />
        </div>
    )
}

export default FCOD3
