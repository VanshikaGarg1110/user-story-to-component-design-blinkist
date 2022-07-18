import { TextField } from '@mui/material';
import React from 'react';

interface InputFieldProps {
    placeholder: string;
    style?: React.CSSProperties;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {

    const handleChange = () => {

    }

    return (
        <TextField
            placeholder={props.placeholder}
            sx={props.style}
            onChange={handleChange}></TextField>
    );
};

export default InputField;