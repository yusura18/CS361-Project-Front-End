import React, { useState } from 'react';
import ImageGrid from '../components/imageGrid';
import SearchData from '../components/searchData';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const UserImages = () => {

    return (
        <div>
            <Container maxWidth="md">
                <br />
                <Typography style={{fontSize: "18px"}} align="center" paragraph>
                To view the images you have uploaded, enter your email and all your images will
                be displayed below. You will have the option to click "Edit" to edit each image's tags.
                Once you're happy with the new tags, click the "Confirm" button. You may also choose to
                delete the image and its tags from the site by clicking the "Delete" button.          
                </Typography>
            </Container>
            <SearchData />
        </div>
    )
}

export default UserImages;
