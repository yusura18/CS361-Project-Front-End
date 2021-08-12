import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Card: {
    height: 500,
    width: 500,
  },
  control: {
    padding: theme.spacing(5),
  },
}));

const LoadImages = (props) => {
    const [spacing, setSpacing] = React.useState(5);
    const classes = useStyles();
  
    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
  
    };
  
    return (
      <div className={classes.root} style={{margin: "50px"}}>
          <br />
        <Grid container className={classes.root}>
          <Grid item xs>
            <Grid container justifyContent="center" spacing={spacing}>
              {props.data.map((value, index) => (
                <Grid key={value.imageID} item xs={8}>
                  <Card >
                      <CardMedia
                        component="img"
                        alt={value.imageID}
                        image={value.imageLink}
                      />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default LoadImages;