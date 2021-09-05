import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
                <hr class="footerBar" />

            <div class="row1">
                <ul>
                    <h3>Community</h3>
                    <a href="#">Create Account</a>
                    <a href="#">Get a promo</a>
                    <a href="#">Get Coupon Code</a>
                </ul>
        
                <ul>
                    <h3>Support</h3>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy & Policy</a>
                    <a href="#">Copyright Issue</a>
                    <a href="#">Get help</a>
                </ul>
        
                <ul>
                    <h3>Site Map</h3>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy & Policy</a>
                    <a href="#">Copyright Issue</a>
                </ul>
        
                <ul>
                    <h3>Download APP</h3>
                    <button>Apple IOs</button>
                    <button>Google Play</button>
                </ul>
            </div>
            <div class="row2">
                <h5>Copyright 2021 University of Arkansas</h5>
                <div>
                    <h5>Conceived and designed by:</h5>
                    <h5>Department of Biological and Agricultural Engineering</h5>
                </div>
                <h5><a href="#">www.uark.edu</a></h5>
            </div>
        </footer>
    )
}

export default Footer
