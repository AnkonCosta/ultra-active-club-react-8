import React from 'react';

const Blog = () => {
    return (
        <div style={{ padding: '60px' }}>
            <h4>How does react work?</h4>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>

            <h4>What is the difference between props and state in React component?</h4>
            <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>

            <h4>What is use of useState and useEffect except Api call?</h4>
            <p>
                The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website. The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting.</p>
        </div>
    );
};

export default Blog;