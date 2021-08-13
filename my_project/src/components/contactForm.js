import React from "react";
import { useForm } from "react-hook-form";
import "../components/form.css";
import axios from 'axios';


export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
      let params = {
          "emailTo": "nuriko.bmm18@gmail.com",
          "email": data.Email,
          "name": data.name,
          "header": "New website Comment",
          "message": data.Comments
      }
    
    /* Using Scott's email microservice */
    // Send post to server & refresh page
    axios.post("https://floating-shelf-48098.herokuapp.com/imagesite", params)
    .then((res) => {
        console.log(JSON.stringify(res.status));
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        alert("Feedback Sent! Thank you!");
        window.location.reload();
    });
  }

  return (
      <div className="wrapper" style={{width: "100%"}}>
        <div className="card-border" style={{width: "50%"}}>
            <h6 className="card-header">Contact Us:</h6>
            <br />
            <br />
            <div className="card-body">
                <div className="mb-3">
                <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <div className="col-lg-10">
                            <label htmlFor="name" className="col-lg-2 control-label" style={{padding: "10px"}}>Name:</label>
                            <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control form-control-lg"
                            placeholder="Enter your name"
                            {...register("name", { required: true, maxLength: 200 })}
                            />
                        </div>
                        <br />
                    </div>
                    <div className="form-group">
                        <div className="col-lg-10">
                            <label htmlFor="email" className="col-lg-2 control-label" style={{padding: "10px"}}>Email:</label>
                            <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>
                        <br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments" className="col-sm-2 control-label" style={{padding: "10px"}}>Comments:</label>
                        <div className="col-sm-10">
                            <textarea
                            id="comments"
                            name="comments"
                            className="form-control"
                            rows="10"
                            cols="50"
                            placeholder="Comments"
                            {...register("Comments", {})}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="reset" className="outline">Reset</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  );
}
