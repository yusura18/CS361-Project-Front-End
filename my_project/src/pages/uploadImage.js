import React, { useState, useRef, useEffect } from "react";
import "../components/form.css";
import axios from "axios";
import baseURL from "../axios";
import { withFormik, Formik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";
import ImagePreview from "../components/imagePreview";
import InputReader from "../components/inputReader";


function UploadImage() {
    
    // const [image, setImage] = useState({
    //     file: null,
    //     loading: true
    // });

    // const uploadedImage = useRef(null);

    // const imageUploader = useRef(null);
    
    const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        imageName: Yup.string().required("Image name is required.").max(150),
        imageLink: Yup.mixed().required("An image file is required."),
        userEmail: Yup.string()
        .email("Invalid email format")
        .required("Email address is required.")
        .max(100),
        copyright: Yup.bool(),
        userCopyright: Yup.string().max(100),
        imageTagOne: Yup.string().required("One image tag is required.").max(100),
        imageTagTwo: Yup.string().max(100),
        imageTagThree: Yup.string().max(100),
        imageTagFour: Yup.string().max(100),
    }),

    mapPropsToValues: ({ props }) => ({
        ...props,
    }),

    fileUploadHandler: (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload= function(result) {
                Formik.setFieldValues({ imageLink: result, imageFile: file});
            };
            reader.readAsDataURL(file);
            // console.log(result);
            console.log(file);
        }
        
    },

    handleSubmit: (payload, { setSubmitting  }) => {

        const form = new FormData();
        form.append("imageLink", payload.imageFile);
        form.append("imageName", payload.imageName);
        form.append("userEmail", payload.userEmail);
        form.append("copyright", payload.copyright);
        form.append("userCopyright", payload.userCopyright);
        form.append("imageTagOne", payload.imageTagOne);
        form.append("imageTagTwo", payload.imageTagTwo);
        form.append("imageTagThree", payload.imageTagThree);
        form.append("imageTagFour", payload.imageTagFour);

        //const headers = {"Content-Type": "form-data"}; 

        alert("image upload payload is " + JSON.stringify(payload/*form*/));

        // Send post to server & refresh page
        axios
        .post(`${baseURL}uploadImage/`, form )
        .then((res) => {
            console.log(JSON.stringify(res.status));
        })
        .catch((err) => {
            console.log("error while submitting image upload form...");
            console.log(err);
        })
        .finally(() => {
            window.location.reload();
        });

        setSubmitting(false);
    },

    displayName: "BasicForm",
    });

    
    const InputFeedback = ({ error }) => 
    error ? <div className="input-feedback">{error}</div> : null;


    const Label = ({ error, className, children, ...props }) => {
    return (
        <label className="label" {...props}>
        {children}
        </label>
    );
    };

    const TextInput = ({
    type,
    id,
    label,
    error,
    value,
    onChange,
    className,
    ...props
    }) => {
    const classes = classnames(
        "input-group",
        { "animated shake error": !!error },
        className
    );

    return (
        <div className={classes}>
        <Label htmlFor={id} error={error}>
            {label}
        </Label>
        <input
            id={id}
            className="text-input"
            type={type}
            value={value}
            onChange={onChange}
            {...props}
        />
        <InputFeedback error={error} />
        </div>
    );
    }
        
    const MyForm = (props) => {   
        const {
        values,
        touched,
        errors,
        dirty,
        handleChange,
        handleBlur,
        fileUploadHandler,
        handleSubmit,
        handleReset,
        isSubmitting,
        } = props;
        
        return (
        <div className="wrapper"> 
            <div className="card-border">
                <h5 className="card-header">Upload an Image:</h5>
                <br />
                <div className="card-body">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="imageDiv">
                            <TextInput
                                id="imageName"
                                name="imageName"
                                type="text"
                                label="Image Title:"
                                placeholder="Enter image title"
                                error={touched.imageName && errors.imageName}
                                value={values.imageName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div>
                                <TextInput 
                                    id="imageLink"
                                    name="file"
                                    type="file"
                                    accept=".png, .jpg, .jpeg, .gif"
                                    label="Select Image:"
                                    required
                                    errors={touched.imageLink && errors.imageLink}
                                    onChange={fileUploadHandler}
                                    onBlur={handleBlur}
                                    // onChange={e => {
                                    //   var file = e.target.files[0];
                                    //   var reader = new FileReader();
                                    //   //Formik.setFieldValue("file", reader.result)
                                    //   reader.onload = function(i) {
                                    //     Formik.setFieldValue("imageLink", i.target.result);
                                    //   };
                                    //   reader.readAsDataURL(file)
                                    //   return(<ImagePreview file={values.imageLink} />)
                                    // }}
                                />
                                <div className="imgPreview">
                                    <img alt="loading" src={values.imageLink} height={800} width={640} />
                                </div>
                            </div>
                        </div>
                        <div className="userInfo">
                            <TextInput
                                id="userEmail"
                                type="email"
                                label="Email:"
                                error={touched.userEmail && errors.userEmail}
                                value={values.userEmail}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <TextInput
                                id="copyright"
                                type="checkbox"
                                label="Copyright:"
                                error={touched.copyright && errors.copyright}
                                value={values.copyright}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div className="copyrights" hidden={!values.copyright}>
                                <TextInput
                                id="userCopyright"
                                type="text"
                                label="Copyright Information:"
                                placeholder="Enter copyright"
                                error={touched.userCopyright && errors.userCopyright}
                                value={values.userCopyright}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                        </div>
                        </div>
                        <div className="tags">
                            <TextInput
                                id="imageTagOne"
                                type="text"
                                label="Image Tag 1:"
                                placeholder="Enter image tag"
                                error={touched.imageTagOne && errors.imageTagOne}
                                value={values.imageTagOne}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <TextInput
                                id="imageTagTwo"
                                type="text"
                                label="Image Tag 2:"
                                placeholder="Enter image tag"
                                error={touched.imageTagTwo && errors.imageTagTwo}
                                value={values.imageTagTwo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <TextInput
                                id="imageTagThree"
                                type="text"
                                label="Image Tag 3:"
                                placeholder="Enter image tag"
                                error={touched.imageTagThree && errors.imageTagThree}
                                values={values.imageTagThree}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <TextInput
                                id="imageTagFour"
                                type="text"
                                label="Image Tag 4:"
                                placeholder="Enter image tag"
                                error={touched.imageTagFour && errors.imageTagFour}
                                value={values.imageTagFour}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                        >
                        Clear
                        </button>
                        <button type="submit" disabled={isSubmitting}>
                        Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>    
        );
    };

    const MyEnhancedForm = formikEnhancer(MyForm);
  
  return (
    <MyEnhancedForm
      className="enhanced"
      props={{
        imageName: "",
        imageLink: null,
        imageFile: null,
        userEmail: "",
        copyright: false,
        userCopyright: "",
        imageTagOne: "",
        imageTagTwo: "",
        imageTagThree: "",
        imageTagFour: "",
      }}
    />
  );
};

export default UploadImage;