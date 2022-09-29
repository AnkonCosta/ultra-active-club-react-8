import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Break from '../Break/Break';
import Toast from '../Toast/Toast';
import './About.css'
const About = (props) => {
    const { details } = props;
    let time = 0;
    for (const activity of details) {
        time = time + activity.time;
    };

    // brealkkk\


    const [message, setMessage] = useState([0]);
    useEffect(() => {

    }, [message])

    // let breakTime;
    const handleClick = event => {

        setMessage((event.target.innerText));
        addToDb(message)
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
                <div>
                    <p>I am Ankon Costa, a Professional web developer, specialized in React js.</p>
                    <a style={{ textDecoration: 'none', color: '#BB2D3B' }} href="tel:01777814875">01777814875</a> <br />
                    <a style={{ textDecoration: 'none', color: '#BB2D3B' }} href="mailto:admin@gmail.com">admin@gmail.com</a>
                </div>
            </div>

            <div>
                <h3>Add a Break</h3>
                <div className='break-btn'>
                    <Break handleClick={handleClick}></Break>
                </div>

            </div>
            <h3>Activities Details</h3>
            <h5 className='activity-time'> <span className='activities-time'>Activities Time </span> <span>{time} min</span> </h5>

            <h5 className='activity-time'> <span className='activities-time'>Break Time </span> <span>{message} min</span> </h5>

            <div className='completed'>
                <Toast></Toast>
            </div>
        </div>
    );
};

export default About;