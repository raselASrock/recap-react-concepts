import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount)
    }
    useEffect( () => {
        console.log(steps)
    }, [steps])
    return (
        <div>
            <h2>This is my Smart Watch: </h2>
            <h4>My Current Steps: {steps}</h4>
            <button onClick={increaseSteps}>Pagla Tui Bhag</button>
        </div>
    );
};

export default Watch;