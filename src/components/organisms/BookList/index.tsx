import Grid from '@mui/material/Grid';
import BookCard from 'components/molecules/BookCard';
import React from 'react';

interface BookListProps {
    bookData: [];
}

const BookList = () => {
    return (
        <Grid>
            {/* map book data and display the book cards. */}
            {/* <BookCard></BookCard> */}
        </Grid>
    );
};

export default BookList;