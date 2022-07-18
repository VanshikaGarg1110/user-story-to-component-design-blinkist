import { Box } from '@mui/material';
import Typography from 'components/atoms/Typography';
import React from 'react';

interface BookSearchItemProps {
    onClick?: () => void;
}

const BookSearchItem = (props: BookSearchItemProps) => {
    return (
        <Box onClick={props.onClick}>
            <Typography>Book Title</Typography>
            <Typography>Author Name</Typography>
            <div>{/*line*/}</div>
        </Box>
    );
};

export default BookSearchItem;