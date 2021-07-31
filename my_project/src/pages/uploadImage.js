import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "../components/form.css";
import axios from "axios";
import baseURL from "../axios";
import { withFormik, Formik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";
import { render } from "@testing-library/react";


const GetImageContent = ({file}) => {
    
    const [imageLinkState, setImageLinkState] = useState({
        loading: false,
        imageLink: undefined
    });

    const { loading, imageLink } = imageLinkState;

    useEffect(() => {
        setImageLinkState((imageLinkState) => ({ ...imageLinkState, loading: true }));
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageLinkState({ loading: false, imageLink: reader.result });
        };
        if (file && file.type.match("image.*")) {
            reader.readAsDataURL(file);
        }
    }, [file]);

    if (!file) {
        return null;
    }

    return (
        <img
            src={imageLink}
            alt={file.name}
            className="img_thumbnail"
            height={200}
            width={200}
        />
    );
}

const UploadImage = () => {
    const [imageLinkValue, setImageLinkValue] = useState({ file: null});
    const { file } = imageLinkValue;

    const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        imageName: Yup.string().required("Image name is required.").max(150),
        file: Yup.mixed().required("An image file is required."),
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

    handleSubmit: (payload, { setSubmitting }) => {
        

        const form = new FormData();
        form.append("imageLink", file.name);
        form.append("imageData", file.src);
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
            Formik.resetForm();
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
        setValues,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
        } = props;

        const [imageLink, setImageLink] = useState();
        const imageLoaded = event => setImageLink(imageLink);
    
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
                                    accept=".jpg, .jpeg, .png, .gif"
                                    label="Select Image:"
                                    errors={touched.imageLink && errors.imageLink}
                                    onBlur={handleBlur}
                                    onChange={(event) => {
                                        setImageLinkValue({...imageLinkValue, file: event.currentTarget.files[0]});
                                    }}
                
                                />
                                
                                <GetImageContent file={file} />
                                
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
                        <button type="submit" disabled={isSubmitting}>Submit</button>
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
        imageData: null,
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