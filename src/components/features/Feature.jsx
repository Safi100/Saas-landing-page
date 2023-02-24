import React from 'react';

const Feature = ({image, header, body}) => {
    return (
        <div className='feature'>
            <div className="feature__frame"><img src={image} alt="frame" /></div>
            <h2 className='feature__header'>{header}</h2>
            <p className='feature__body'>{body}</p>
        </div>
    );
}

export default Feature;
