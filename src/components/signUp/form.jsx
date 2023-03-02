import React from 'react';
import formElement from '../../assets/form_element.png'
const Form = () => {
    const preventSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form className='sign_form' onSubmit={(e)=> preventSubmit(e)}>
            <img className='form_element' src={formElement} alt="formElement" />
            <div>
                <label htmlFor="">NAME:</label>
                <input type="text" placeholder='Full Name' required/>
            </div>
            <div>
                <label htmlFor="">EMAIL:</label>
                <input type="email" placeholder='Your Email Address' required/>
            </div>
            <div>
                <label htmlFor="">PASSWORD:</label>
                <input type="text" placeholder='****************' required/>
            </div>
            <div>
                <button className='button'>Sign Up</button>
            </div>
        </form>
    );
}

export default Form;
