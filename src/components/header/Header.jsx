import React from 'react';
import Nav from '../nav/Nav';
import Header_img from '../../assets/Header_top_bg.png'
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <img className='top_header' src={Header_img} alt="top_Header_img" />
            <div className="wrapper">
                <Nav />
                <div className="header_info">
                    <h2>Managing freelance payments has never been easier</h2>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    <div className="buttons">
                        <button className='button get_started_btn'>Get Started</button>
                        <button className='button request_demo_btn'>Request Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
