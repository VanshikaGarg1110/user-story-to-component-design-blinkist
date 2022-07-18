import React from 'react';
import Button from '@mui/material/Button';

interface ButtonComponentProps {
    variant: "text" | "outlined" | "contained";
    onClick?: () => void;
    label: string;
  }

const ButtonComponent = (props:ButtonComponentProps) => {
    return(
        <Button 
            variant={props.variant} 
            label={props.label}
            onClick={props.onClick}></Button>
    );
};

export default ButtonComponent;