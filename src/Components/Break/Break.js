import React, { useState } from 'react';

const Break = (props) => {
    const { handleClick } = props;

    return (
        <div>
            <button onClick={handleClick}>10</button>
            <button onClick={handleClick}>20</button>
            <button onClick={handleClick}>30</button>
            <button onClick={handleClick}>40</button>
        </div>
    );
};

export default Break;