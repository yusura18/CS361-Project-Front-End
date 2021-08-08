import React from "react";
import { useForm } from "react-hook-form";
import "../components/form.css";


export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
      <div className="wrapper" style={{width: "70%"}}>
        <div className="card-border">
            <h6 className="card-header">Contact Us:</h6>
            <br />
            <div className="card-body">
                <div className="mb-3">
                <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name" className="col-lg-2 control-label">Name:</label>
                        <div className="col-lg-10">
                            <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control form-control-lg"
                            placeholder="Enter your name"
                            {...register("name", { required: true, maxLength: 200 })}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-lg-2 control-label">Email:</label>
                        <div className="col-lg-10">
                            <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments" className="col-sm-2 control-label">Comments:</label>
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
