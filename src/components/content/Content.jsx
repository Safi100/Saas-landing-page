import React from 'react';
import Image_content from '../../assets/Image-content.png'
import icon from '../../assets/icon_sign.png'
import './content.css'
const Content = () => {
    return (
        <div className='content'>
            <div className="wrapper">
                <div className='image_div'><img src={Image_content} alt="Image_content" /></div>
                <div className='content_info'>
                    <p className='choose_us_text'>Why Choose Us</p>
                    <h2>Track your crytpo portfolio on the best way possible</h2>
                    <p className='content_body'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    <ul>
                        <li><span><img src={icon} alt="icon" /></span> Get Overview at a glance</li>
                        <li><span><img src={icon} alt="icon" /></span> Deoposit funds easily, securlity</li>
                        <li><span><img src={icon} alt="icon" /></span> Get Live Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Content;
