import React from 'react';

const PhotoCard = props =>{
    return(
        <div className='photoCard'>
            <img alt='APOD' src={props.hdurl}/>
        </div>
    )
}

export default PhotoCard