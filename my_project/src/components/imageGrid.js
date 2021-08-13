import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import baseURL from "../axios";


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

const ImageGrid = (props) => {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();
  const [editMode, toggleEdit] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [imageTagOne, setImageTagOne] = useState(props.imageTagOne);
  const [imageTagTwo, setImageTagTwo] = useState(props.imageTagTwo);
  const [imageTagThree, setImageTagThree] = useState(props.imageTagThree);
  const [imageTagFour, setImageTagFour] = useState(props.imageTagFour);


  // Send new image tag data to database
  const updateTags = (e) => {
      e.preventDefault();
      const imageID = e.currentTarget.getAttribute("id");
      const data = {
          imageTagOne: imageTagOne,
          imageTagTwo: imageTagTwo,
          imageTagThree: imageTagThree,
          imageTagFour: imageTagFour,
          imageID: imageID,
      }

      // Send put request 
      axios.put(`${baseURL}userImages/`, { data })
        .then( res => {
            console.log(res);
        })
        .catch((err) => {
            console.log("error while updating image row");
            alert("There was an error with the submission");
            console.log(err);
        })
        .finally(() => {
            handleEditClick();
            props.updateState();
        })
  } 

  // Send query to delete image from database
  const deleteRow = (e) => {
    const id = e.currentTarget.getAttribute("id");
      axios.delete(`${baseURL}userImages/`, {data: {imageID: id}})
      .then(res => {
          console.log(res);
      })
      .catch((err) => {
          console.log("error while deleting image row");
          console.log(err);
      })
      .finally(() => {
          // window.location.reload();
          props.updateState();
      })
  }

  // Toggle Edit button and disabling TextFields
  const handleEditClick = () => {
    setDisabled(!disabled);
    toggleEdit(!editMode);
  }

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
                  <CardActions key={value.imageID} id={value.imageID}>
                    <form key={value.imageID}>  
                      <TextField
                        id="imageTagOne"
                        name="imageTagOne"
                        size="small"
                        label="Tag 1"
                        variant="outlined"
                        defaultValue={value.imageTagOne}
                        onChange={e => setImageTagOne(e.target.value)}
                        disabled={disabled}
                      />

                      <TextField
                        id="imageTagTwo"
                        name="imageTagTwo"
                        size="small"
                        label="Tag 2"
                        variant="outlined"
                        defaultValue={value.imageTagTwo}
                        onChange={e => setImageTagTwo(e.target.value)}  
                        disabled={disabled}
                        />

                      <TextField
                        id="imageTagThree"
                        name="imageTagThree"
                        size="small"
                        label="Tag 3"
                        variant="outlined"
                        defaultValue={value.imageTagThree}
                        onChange={e => setImageTagThree(e.target.value)}
                        disabled={disabled}
                        />

                      <TextField
                        id="imageTagFour" 
                        name="imageTagFour"
                        size="small"
                        label="Tag 4"
                        variant="outlined"
                        defaultValue={value.imageTagFour}
                        onChange={e => setImageTagFour(e.target.value)}
                        disabled={disabled}
                        />

                      {editMode
                      ? <Button size="small" style={{margin: 3}} color="default" id={value.imageID} onClick={(e) => updateTags(e)}>Confirm</Button>
                      : <Button size="small" style={{margin: 3}} color="primary" onClick={() => handleEditClick()}>Edit</Button>
                      }
                      <Button size="small" style={{margin: 5, fontWeight: "bold", }} color="secondary" id={value.imageID} onClick={(e) => deleteRow(e)}>Delete</Button>
                    </form>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageGrid;