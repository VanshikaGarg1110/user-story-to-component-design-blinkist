import { Grid, Icon } from '@mui/material';
import Typography from 'components/atoms/Typography';
import React from 'react';

interface MenuItemProps {
    icon: string;
    text: string;
    onClick: () => void;
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <Grid>
            {/* <Icon src={props.icon}></Icon> */}
            <Typography>{props.text}</Typography>
        </Grid>
    );
};

export default MenuItem;