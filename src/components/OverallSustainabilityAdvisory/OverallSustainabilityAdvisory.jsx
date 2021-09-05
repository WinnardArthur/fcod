import React from 'react';
import './overallsustainabilityadvisory.css'

const OverallSustainabilityAdvisory = () => {
    return (
        <div className="OSA__section">
            <div className="OSA__col-1">
                <button className="OSA__btn">Overall Sustainability Advisory</button>
                <div className="dangerInfo">
                    <div className="dangerSymbol">
                        <div className="dangerBar"></div>
                    </div>
                    <div className="dangerContent">
                        <h1>$</h1>
                        <p>This food has a strong negative impact on the environment. 
                            Carefully consider your decison.
                        </p>
                    </div>
                </div>
            </div>
            <div className="OSA__col-1 OSA__col-2">
                <div className="stats">
                    <h1>1.2</h1>
                    <h5>out of</h5>
                    <h1>5</h1>
                </div>
                <div className="shapes">
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"></div>
                    <div className="shape4"></div>
                    <div className="shape5"></div>
                </div>
            </div>
        </div>
    )
}

export default OverallSustainabilityAdvisory
