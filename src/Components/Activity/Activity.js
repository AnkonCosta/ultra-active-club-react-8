import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { img, name, description, age, time, } = props.activity;
    return (
        <div className='activity-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description.slice(0, 60)}.</p>
            <p>For age: {age}</p>
            <p>Time required: {time}</p>
            <button onClick={() => props.handleAdd(props.activity)} className='btn-add'>Add to Chart</button>
        </div>
    );
};

export default Activity;