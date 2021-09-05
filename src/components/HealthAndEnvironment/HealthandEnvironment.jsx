import React from 'react';
import './healthandenvironment.css';

const HealthandEnvironment = () => {
    return (
        <div className="healthEnvironmentSection">
            <div className="healthEnvironment__col-1">
                <h3>Nutrition & health Outlook</h3>
                <div className="NHO">
                    <div>
                        <h1>55</h1>
                    </div>
                    <div className="NHO__btns">
                        <button>Diet Quality</button>
                        <button>Diet Diversity</button>
                    </div>
                </div>
            </div>
            <div className="healthEnvironment__col-1">
                <h3>Environmental Impact</h3>
                <div className="EI">
                    <div className="moneyBar">
                        <h1>$ 45.23</h1>
                        <div className="moneyBarTriangle"></div>
                    </div>
                    <div className="NHO__btns">
                        <button>Ecosystem Cost</button>
                        <button>Health cost</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthandEnvironment
