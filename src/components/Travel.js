import React from 'react';

const Travel = ({ destinations, country, picture, distance }) => {
    return (
        <>
            <div>Destinations : {destinations}</div>
            <div>Pays : {country}</div>
            <div>Image : <img src={picture} alt="Brazil" /></div>
            <div>Distance : {distance}</div>
        </>
    )
}

export default Travel