import { Box } from "@mui/material";
import Image from "components/atoms/Image";
import ProgressBar from "components/atoms/ProgressBar";
import Typography from "components/atoms/Typography";
import React from "react";


interface BookCardProps {
    bookImage: string;
    title: string;
    author: string;
    readingTime: string;
    progress: number;
    onClick?: () => void;
}

const BookCard = (props: BookCardProps) => {
    return (
        <Box onClick={props.onClick}>
           <Image src={props.bookImage}></Image>
           <Typography>{props.title}</Typography>
           <Typography>{props.author}</Typography>
           <Typography>{props.readingTime}</Typography>
           <ProgressBar value={props.progress}></ProgressBar>
        </Box>
    );
};

export default BookCard;