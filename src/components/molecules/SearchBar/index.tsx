import { Grid } from '@mui/material';
import React from 'react';
import InputField from '../InputField';

interface SearchBarProps {
    placeholder: string;
    icon: string;
    onClick?: () => void;
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <Grid onClick={props.onClick}>
            {/* <Icon src={props.icon}></Icon> */}
            <InputField placeholder={props.placeholder}></InputField>
        </Grid>
    );
};

export default SearchBar;