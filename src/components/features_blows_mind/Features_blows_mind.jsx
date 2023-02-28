import React from 'react';
import './features_blows_mind.css'
import FBM_Card from './FBM_Card'

const FeaturesBlowsMind = () => {
    return (
        <div className='features_blows_mind'>
            <div className="wrapper">
                <h2>Features that blows mind</h2>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <div className="row">
                    <FBM_Card />
                    <FBM_Card />
                    <div className='two_FBM'>
                        <div className="FBM"><h2>Save money year-round</h2></div>
                        <div className="FBM"><h2>100+ Apps Powerful integrations</h2></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesBlowsMind;
