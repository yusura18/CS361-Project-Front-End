import React from 'react';
import FindImages from '../components/findImages';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const SearchImages = () => {
    return (
        <div>
            <Container maxWidth="md">
                <br />
                <Typography style={{fontSize: "18px"}} align="center" paragraph>
                To search for images, enter descriptive words (dog, food, travel, etc.) and
                all the images matching that description will be displayed below. Click the clear filter
                or enter another search to find more!               
                </Typography>
            </Container>
            <FindImages />
        </div>
    )
}

export default SearchImages;
