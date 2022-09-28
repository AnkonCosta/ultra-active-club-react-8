import React, { useState } from 'react';

const Break = () => {

    const options = [
        { text: 10 },
        { text: 20 },
        { text: 30 },
        { text: 40 },
    ];

    const [selected, setSelected] = useState([]);

    const handleChange = (select) => {
        const newText = [...selected, select]
        setSelected(newText)
    };

    let text = 0;
    // for (const text of option)

    return (
        <div>
            {
                options.map(option => <button onClick={() => handleChange(option)}>{option.text}</button>)
            }

        </div>
    );
};

export default Break;