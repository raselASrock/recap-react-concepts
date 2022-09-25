import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';

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
        <div style={{border: '2px solid red'}}>
            <h2>This is my Smart Watch: </h2>
            <Display name = 'Garmin' steps = {steps}></Display>
            <h4>My Current Steps: {steps}</h4>
            <button onClick={increaseSteps}>Pagla Tui Bhag</button>
        </div>
    );
};

export default Watch;