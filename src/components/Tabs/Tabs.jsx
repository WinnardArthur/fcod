import React from 'react';
import './tabs.css';

const Tabs = ({ home }) => {

    const Hometab = () => {
        return (
            <div className="tabsSection">
                <div className="tabs">
                    <a href="/fcod2" className="activeTab">
                        <img src="/assets/images/IMG-20210813-WA0003.jpg" alt="home" className="tabImage" />
                        <h5>Home</h5>
                    </a>
    
                    <a href="/fcod3">
                        <img src="/assets/images/PikPng.com_green-energy-png_3749294.png" alt="EnN outlook" className="tabImage" />
                        <h5>EnN Outlook</h5>
                    </a>
                </div>
                <hr className="tabsUnderline" />
            </div>
        )
    }

    const OutlookTab = () => {
        return (
            <div className="tabsSection">
                <div className="tabs">
                    <a href="/fcod2">
                        <img src="/assets/images/IMG-20210813-WA0003.jpg" alt="home" className="tabImage" />
                        <h5>Home</h5>
                    </a>
    
                    <a href="/fcod3" className="activeTab">
                        <img src="/assets/images/PikPng.com_green-energy-png_3749294.png" alt="EnN outlook" className="tabImage" />
                        <h5>EnN Outlook</h5>
                    </a>
                </div>
                <hr className="tabsUnderline" />
            </div>
        )
    }
    
    return (
        <>
            {home ? <Hometab /> : <OutlookTab />}
        </>
    )
}

export default Tabs
