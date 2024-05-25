import React, { Component } from 'react';

const EventDetails = (eventData) => {
    const data = eventData;
    console.log("check event",data);


    return ( 
        <div className='container'>
            <h1>{data.eventData.name}</h1>

        </div>
     );
}
 
export default EventDetails;