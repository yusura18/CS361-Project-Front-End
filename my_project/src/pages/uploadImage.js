import React, { useState, useEffect } from "react";
import "../components/form.css";
import axios from "axios";
import baseURL from "../axios";
import CustomizedDialogs from "../components/helpModal";
import { withFormik, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { TextInput } from "../components/TextInput";
import { ImageContent, convertImageToBase64 } from "../components/ImageContent";


const UploadImage = () => {

    const [imageLinkValue, setImageLinkValue] = useState({ file: null});
    const { file } = imageLinkValue;

    const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        imageName: Yup.string().required("Image name is required.").max(150),
        imageLink: Yup.mixed(),
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

    mapPropsToStatus: ({ props }) => ({
        ...props,
    }),

    handleSubmit: async (values, { setSubmitting }) => {

        // Create new form data to send as post
        const form = new FormData();
        form.append("imageLink", values.imageFile.name);
        form.append("imageData", values.imageFile);
        form.append("imageName", values.imageName);
        form.append("userEmail", values.userEmail);
        form.append("copyright", values.copyright);
        form.append("userCopyright", values.userCopyright);
        form.append("imageTagOne", values.imageTagOne);
        form.append("imageTagTwo", values.imageTagTwo);
        form.append("imageTagThree", values.imageTagThree);
        form.append("imageTagFour", values.imageTagFour);

        const config = {
            headers: {"Content-Type": "multipart/form-data"}
        } 

        //alert("image upload payload is " + JSON.stringify(values));
        console.log("payload: ", JSON.stringify(form));

        // Send post to server & refresh page
        axios.post(`${baseURL}uploadImage/`, form)
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

    const MyForm = (props) => {   
        const {
        values,
        touched,
        errors,
        dirty,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
        } = props;

        const { setFieldValue } = useFormikContext();
        const [imageLink, setImageLink] = useState();

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
                                        console.log("@@setting file");
                                        setFieldValue("imageFile", event.currentTarget.files[0]);
                                        setImageLink(event.currentTarget.files[0]);
                                    }} 
                                    
                                />

                                <ImageContent file={imageLink} />
                                
                            </div>
                            <CustomizedDialogs />      
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
                        {"Clear"}
                        </button>
                        <button type="submit" disabled={isSubmitting}>{"Submit"}</button>
                    </form>
                </div>
            </div>
        </div>    
        );
    };

    const MyEnhancedForm = formikEnhancer(MyForm);
  

    return (

            <MyEnhancedForm className="enhanced"
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
                imageFile: null
                }} 
            />

    );   
}

export default UploadImage;