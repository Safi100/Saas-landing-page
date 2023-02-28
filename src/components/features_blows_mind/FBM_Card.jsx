import React from 'react';
import FeaturesBlowsMindImage from '../../assets/features_blows_mind.png';
const FBMCard = () => {
    return (
        <div className='FBM'>
            <img src={FeaturesBlowsMindImage} alt="FeaturesBlowsMindImage" />
            <h2>Connect wallets & exchanges</h2>
            <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
        </div>
    );
}

export default FBMCard;
