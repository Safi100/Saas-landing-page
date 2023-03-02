import React from 'react';
import Open from '../../assets/icon-menu.png'
import Close from '../../assets/icon-close.png'
import './nav.css'
const Nav = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
        {open && <div className='blur'></div>}
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
                <a className='button sign_up_btn' href="/">Start Free</a>
            </div>
            <div className={`mobile_nav ${open ? '' : 'hide'}`}>
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
            <div className="menu">
                { !open && <div onClick={()=> setOpen(true)} className="open"><img src={Open} alt="Open" /></div> }
                { open && <div onClick={()=> setOpen(false)} className="close"><img src={Close} alt="Close" /></div> }
                
            </div>
        </div>
        </>
    );
}

export default Nav;
