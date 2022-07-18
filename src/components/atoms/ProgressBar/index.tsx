import { LinearProgress } from '@mui/material';
import React from 'react';

interface ProgressBarProps{
    value: number;
}

const ProgressBar = (props:ProgressBarProps) => {
    return (
        <LinearProgress value={props.value}></LinearProgress>
    );
};

export default ProgressBar;