import React, { useState } from 'react';

const Break = () => {

    const options = [
        { text: 10 },
        { text: 20 },
        { text: 30 },
        { text: 40 },
    ];

    const [selected, setSelected] = useState([]);
    let text = 0;
    const handleChange = () => {
        text = options.text;
    };
    return (
        <div>
        </div>
    );
};

export default Break;