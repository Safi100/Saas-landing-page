import React from 'react';
import Feature from './Feature';
import frame1 from '../../assets/Frame.png'
import frame2 from '../../assets/Frame-1.png'
import frame3 from '../../assets/Frame-2.png'
import './features.css'
const Featues = () => {
    const features = [
        {
            img: frame1,
            header:"Modern Cards",
            body:"End-to-end payments and financial management in a single solution. Meet the right platform.",
        },
        {
            img: frame2,
            header:"No Extra Fee",
            body:"End-to-end payments and financial management in a single solution. Meet the right platform.",
        },
        {
            img: frame3,
            header:"Super Secure",
            body:"End-to-end payments and financial management in a single solution. Meet the right platform.",
        }
    ]
    return (
        <div className='features'>
            <div className="wrapper">
                {features.map((feature, index) => (
                    <Feature image={feature.img} header={feature.header} body={feature.body}  key={index}/> 
                ))}
            </div>
        </div>
    );
}

export default Featues;
