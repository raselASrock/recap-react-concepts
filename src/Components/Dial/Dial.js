import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>This is Dial</h3>
            <p>Dial Steps So Far:{props.steps} </p>
        </div>
    );
};

export default Dial;