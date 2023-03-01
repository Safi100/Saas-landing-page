import React from 'react';

const Form = () => {
    return (
        <div className='sign_form'>
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
        </div>
    );
}

export default Form;
