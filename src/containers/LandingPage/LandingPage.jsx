import React from 'react'
import Header from '../../components/Header/Header';
import Divider from '../../components/Divider/Divider'
import Hero from '../../components/Hero/Hero';
import Info from '../../components/InfoSection/Info';
import Usetool from '../../components/UseToolSection/Usetool';
import HowItWork from '../../components/HowItWorkSection/HowItWork';
import Partners from '../../components/Our partners/Partners';
import Footer from '../../components/Footer/Footer';
import UsefulLink from '../../components/UseLinkSection/UsefulLink';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Divider />
            <div>
                <Hero />
            </div>
            <Divider />
            <Info />
            <Divider />
            <Usetool />
            <Divider />
            <HowItWork />
            <Divider />
            <Partners />
            <UsefulLink />
            <Footer />
        </div>
    )
}

export default LandingPage
