import React from 'react';
import Company from './company';
import comp1 from '../../assets/Group-1.png'
import comp2 from '../../assets/Group-2.png'
import comp3 from '../../assets/Group-3.png'
import comp4 from '../../assets/Group-4.png'
import comp5 from '../../assets/Group-5.png'
import comp6 from '../../assets/Group-6.png'
import './companies.css'
const Companies = () => {
    const companies = [comp1, comp2, comp3, comp4, comp5, comp6]
    return (
        <div className='companies'>
            <div className="wrapper">
                <h2>Over 32k+ software businesses growing with Ar Shakir.</h2>
                <div className="companies_row">
                    {companies.map(comp_src => (
                    <Company img={comp_src}/>
                    ))} 
                </div>
            </div>
        </div>
    );
}

export default Companies;
