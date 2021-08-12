import React from 'react';
import ContactForm from '../components/contactForm';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const About = () => {

    return (
        <div>
            <Container maxWidth="md">
                <br />
                <Typography style={{fontSize: "18px"}} align="center" paragraph>
                Thank you for visiting my site! I am a student at OSU and I created an image sharing
                website for my Software Engineering project.
                If you'd like to send some feedback or get in touch with me, fill out the form below. 
                </Typography>
            </Container>
            <ContactForm />
        </div>
    )
}

export default About;
