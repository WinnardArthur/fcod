import React from 'react';
import './tabs.css';

const Tabs = () => {
    return (
        <div className="tabsSection">
            <div className="tabs">
                <a href="#">
                    <img src="/assets/images/IMG-20210813-WA0003.jpg" alt="home" className="tabImage" />
                    <h5>Home</h5>
                </a>

                <a href="#">
                    <img src="/assets/images/PikPng.com_green-energy-png_3749294.png" alt="EnN outlook" className="tabImage" />
                    <h5>EnN Outlook</h5>
                </a>
            </div>
            <hr className="tabsUnderline" />
        </div>
    )
}

export default Tabs
