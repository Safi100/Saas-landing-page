import React from 'react';
import './nav.css'
const Nav = () => {
    return (
        <div className='nav'>
            <a href='/' className="logo">AR SHAKIR</a>
            <ul>
                <li><a href="/">Product</a></li>
                <li><a href="/">Template</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Pricing</a></li>
            </ul>
            <div className="sign_div">
                <a href="/">Sign in</a>
                <a className='button sign_up' href="/">Start Free</a>
            </div>
        </div>
    );
}

export default Nav;
