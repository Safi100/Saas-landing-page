import React from 'react';
import formElement from '../../assets/form_element.png'
const Form = () => {
    return (
        <form className='sign_form'>
            <img className='form_element' src={formElement} alt="formElement" />
            <div>
                <label htmlFor="">NAME:</label>
                <input type="text" placeholder='Full Name' />
            </div>
            <div>
                <label htmlFor="">EMAIL:</label>
                <input type="email" placeholder='Your Email Address' />
            </div>
            <div>
                <label htmlFor="">PASSWORD:</label>
                <input type="text" placeholder='****************' />
            </div>
            <div>
                <button className='button'>Sign Up</button>
            </div>
        </form>
    );
}

export default Form;
