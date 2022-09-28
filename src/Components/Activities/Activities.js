import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAdd = (activity) => {
        console.log('working', activity)
        const newTime = [...details, activity]
        setDetails(newTime)
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

            <div className='profile'>

                <About details={details}></About>
            </div>
        </div>
    );
};

export default Activities;