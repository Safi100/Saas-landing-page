import React from 'react';
import Icon from '../../assets/icon-financial.png'
import Icon2 from '../../assets/icon-2-financial.png'
import Icon3 from '../../assets/icon-3-financial.png'
import Image_financial from '../../assets/Image_financial.png'
import './financial.css'
const Financial = () => {
    return (
        <div className='financial'>
            <div className="wrapper">
                <div className='image_div'><img src={Image_financial} alt="Image_financial" /></div>
                <div className="financial_info">
                    <p className='choose_us_text'>Why Choose Us</p>
                    <h2>Specialist aiding clients on financial challenges</h2>
                    <p className='financial_body'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                </div>
            </div>
        </div>
    );
}

export default Financial;
