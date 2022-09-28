import React, { useState } from 'react';
import Break from '../Break/Break';
import './About.css'
const About = (props) => {
    const { details } = props;
    let time = 0;
    for (const activity of details) {
        time = time + activity.time;
    };




    return (
        <div className='all-info'>

            <div >
                <div className='info'>
                    <img height={50} width={50} src="ankon.png" alt="" />
                    <div >
                        <h5>Ankon Costa <br /><p>Dhaka, Bangladesh</p> </h5>
                    </div>

                </div>
            </div>

            <div>
                <h3>Add a Break</h3>
                <div className='break-btn'>
                    <Break ></Break>
                </div>

            </div>
            <h3>Activities Details</h3>
            <h5 className='activity-time'> <span className='activities-time'>Activities Time </span> {time} </h5>

            <h5 className='activity-time'> <span className='activities-time'>Break Time </span> <span id='break' >0</span> </h5>
        </div>
    );
};

export default About;