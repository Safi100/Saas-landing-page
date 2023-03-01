import React from 'react';
import PaymentImg from '../../assets/payment.png'
import './payment.css'
const Payment = () => {
    return (
        <div className='payment'>
            <div className="wrapper">
                <div className="image_div"><img src={PaymentImg} alt="Payment-Img" /></div>
                <div className="payment_info">
                    <p className='heading_small'>Our feature</p>
                    <h2>Receive payments quickly from anywhere</h2>
                    <p className='payment_body'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                    <button className='button'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
