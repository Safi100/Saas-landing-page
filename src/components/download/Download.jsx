import React from 'react';
import Google_play from '../../assets/google-play.png'
import App_store from '../../assets/app-store.png'
import './download.css'
const Download = () => {
    return (
        <div className='download'>
            <div className="wrapper">
            <p className='heading_paragraph'>Project Management App</p>
            <h2>Download our free project management app for clients</h2>
            <p className='download_body'>End-to-end payments and financial management in a single solution.</p>
            <div>
                <button className='button'><img src={App_store} alt="App_store logo" /> App Store</button>
                <button className='button'><img src={Google_play} alt="Google_play logo" /> Google Play</button>
            </div>
            </div>
        </div>
    );
}

export default Download;
