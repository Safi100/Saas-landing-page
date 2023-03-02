import React from 'react';
import Form from './form';
import sign_top from '../../assets/sign_top.png'
import sign_bottom from '../../assets/sign_bottom.png'

import './signup.css'
const SignUp = () => {
    return (
        <div className='sign_up'>
            <img className='top' src={sign_top} alt="sign_top_image" />
            <img className='bottom' src={sign_bottom} alt="sign_bottom_image" />
            <div className="wrapper">
                <div><h2>We are here to help you grow your business</h2></div>
                <Form />
            </div>
        </div>
    );
}

export default SignUp;
