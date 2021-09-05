import React from 'react';
import './header.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Header() {
    return (
        <header>
            <a href="/" class="logo">
                <img src="/assets/images/Group 2209.png" alt="" />
            </a>
            <ul class="navElements">
                <li><a href="#">About tool</a></li>
                <div class="verticalBar"></div>
                <li><a href="#">How it work</a></li>
                <div class="verticalBar"></div>
                <li><a href="#">Resources</a></li>
                <div class="verticalBar"></div>
                <li><a href="#">Sign in</a></li>
            </ul>
            <div class="rightElements">
                <div>
                    {/* <h5>Eng</h5> */}
                    <ExpandMoreIcon />
                </div>
                <button class="toggleBars">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </button>
            </div>
        </header>
    )
}
