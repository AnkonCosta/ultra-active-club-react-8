import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAdd = (activity) => {
        console.log('working', activity)
    }

    return (
        <div className='main-container'>
            <div  >
                <div>
                    <h1>Ankon Daily Activities</h1>
                    <div className='activities-container'>
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                handleAdd={handleAdd}
                            ></Activity>)
                        }
                    </div>
                </div>
            </div>

            <div>
                <div className='profile'>
                    <img height={50} width={50} src="ankon.png" alt="" />
                    <div >
                        <h5>Ankon Costa <br /><p>Dhaka, Bangladesh</p> </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;