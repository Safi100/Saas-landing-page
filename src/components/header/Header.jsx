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
            </div>
        </div>
    );
}

export default Header;
