import { Grid } from '@mui/material';
import Image from 'components/atoms/Image';
import Typography from 'components/atoms/Typography';
import React from 'react';

interface WishlistItemProps {
    votes: number;
    bookImage: string;
    title: string;
    author: string;
    onClick?: () => void;
}

const WishlistItem = (props: WishlistItemProps) => {
    return (
        <Grid onClick={props.onClick}>
            <Typography>{props.votes}</Typography>
            <Image src={props.bookImage}></Image>
            <Typography>{props.title}</Typography>
            <Typography>{props.author}</Typography>
        </Grid>
    );
};

export default WishlistItem;