// import React from "react";
// import "../components/form.css";
// import axios from "axios";
// import baseURL from "../axios";
// import { withFormik } from "formik";
// import * as Yup from "yup";
// import classnames from "classnames";
// import InputReader from "../components/inputReader";

// const formikEnhancer = withFormik({
//   validationSchema: Yup.object().shape({
//     imageName: Yup.string().required("Image name is required.").max(150),
//     imageLink: Yup.mixed().required("An image file is required."),
//     userEmail: Yup.string()
//       .email("Invalid email format")
//       .required("Email address is required.")
//       .max(100),
//     copyright: Yup.bool(),
//     userCopyright: Yup.string().max(100),
//     imageTagOne: Yup.string().required("One image tag is required.").max(100),
//     imageTagTwo: Yup.string().max(100),
//     imageTagThree: Yup.string().max(100),
//     imageTagFour: Yup.string().max(100),
//   }),

//   mapPropsToValues: ({ props }) => ({
//     ...props,
//   }),


//   handleSubmit: (values, { setSubmitting  }) => {

//     // const form = new FormData();
//     // form.append("imageLink", payload.imageLink);
//     // form.append("imageName", payload.imageName);
//     // form.append("userEmail", payload.userEmail);
//     // form.append("copyright", payload.copyright);
//     // form.append("userCopyright", payload.userCopyright);
//     // form.append("imageTagOne", payload.imageTagOne);
//     // form.append("imageTagTwo", payload.imageTagTwo);
//     // form.append("imageTagThree", payload.imageTagThree);
//     // form.append("imageTagFour", payload.imageTagFour);

//     //const headers = {"Content-Type": "form-data"}; 

//     alert("image upload payload is " + JSON.stringify(values /*form*/));

//     // Send post to server & refresh page
//     axios
//       .post(`${baseURL}uploadImage/`, values )
//       .then((res) => {
//         console.log(JSON.stringify(res.status));
//       })
//       .catch((err) => {
//         console.log("error while submitting image upload form...");
//         console.log(err);
//       })
//       .finally(() => {
//         window.location.reload();
//       });

//     setSubmitting(false);
//   },

//   displayName: "BasicForm",
// });

// const InputFeedback = ({ error }) => 
//   error ? <div className="input-feedback">{error}</div> : null;


// const Label = ({ error, className, children, ...props }) => {
//   return (
//     <label className="label" {...props}>
//       {children}
//     </label>
//   );
// };

// const TextInput = ({
//   type,
//   id,
//   label,
//   error,
//   value,
//   onChange,
//   className,
//   ...props
// }) => {
//   const classes = classnames(
//     "input-group",
//     { "animated shake error": !!error },
//     className
//   );

//   return (
//     <div className={classes}>
//       <Label htmlFor={id} error={error}>
//         {label}
//       </Label>
//       <input
//         id={id}
//         className="text-input"
//         type={type}
//         value={value}
//         onChange={onChange}
//         {...props}
//       />
//       <InputFeedback error={error} />
//     </div>
//   );
// }
    
// const MyForm = (props) => {   
//     const {
//       values,
//       touched,
//       errors,
//       dirty,
//       handleChange,
//       handleBlur,
//       handleSubmit,
//       handleReset,
//       isSubmitting,
//     } = props;
  
//     return (
//       <div className="wrapper"> 
//         <div className="card-border">
//             <h5 className="card-header">Upload an Image:</h5>
//             <br />
//             <div className="card-body">
//                 <form onSubmit={handleSubmit} encType="multipart/form-data">
//                     <div className="imageDiv">
//                         <TextInput
//                             id="imageName"
//                             name="imageName"
//                             type="text"
//                             label="Image Title:"
//                             placeholder="Enter image title"
//                             error={touched.imageName && errors.imageName}
//                             value={values.imageName}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                         <TextInput 
//                             id="imageLink"
//                             name="file"
//                             type="file"
//                             accept=".png, .jpg, .jpeg, .gif"
//                             label="Select Image:"
//                             required
//                             errors={touched.imageLink && errors.imageLink}
//                             onBlur="false"
//                             onChange={e => {
//                               var file = e.taget.files[0];
//                               var reader = new FileReader();
//                               setFieldValue("file", file.name)
//                               reader.onload = function(i) {
//                                 setFieldValue("imageLink", i.target.result);
//                               };
//                               reader.readAsDataURL(file)
//                               return(<ImagePreview file={values.imageLink} />)
//                             }}
//                             //value={values.imageLink}
                            
//                         />
//                     </div>
//                     <div className="userInfo">
//                         <TextInput
//                             id="userEmail"
//                             type="email"
//                             label="Email:"
//                             error={touched.userEmail && errors.userEmail}
//                             value={values.userEmail}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                         <TextInput
//                             id="copyright"
//                             type="checkbox"
//                             label="Copyright:"
//                             error={touched.copyright && errors.copyright}
//                             value={values.copyright}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                         <div className="copyrights" hidden={!values.copyright}>
//                             <TextInput
//                             id="userCopyright"
//                             type="text"
//                             label="Copyright Information:"
//                             placeholder="Enter copyright"
//                             error={touched.userCopyright && errors.userCopyright}
//                             value={values.userCopyright}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             />
//                     </div>
//                     </div>
//                     <div className="tags">
//                         <TextInput
//                             id="imageTagOne"
//                             type="text"
//                             label="Image Tag 1:"
//                             placeholder="Enter image tag"
//                             error={touched.imageTagOne && errors.imageTagOne}
//                             value={values.imageTagOne}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                         <TextInput
//                             id="imageTagTwo"
//                             type="text"
//                             label="Image Tag 2:"
//                             placeholder="Enter image tag"
//                             error={touched.imageTagTwo && errors.imageTagTwo}
//                             value={values.imageTagTwo}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                         <TextInput
//                             id="imageTagThree"
//                             type="text"
//                             label="Image Tag 3:"
//                             placeholder="Enter image tag"
//                             error={touched.imageTagThree && errors.imageTagThree}
//                             values={values.imageTagThree}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                         <TextInput
//                             id="imageTagFour"
//                             type="text"
//                             label="Image Tag 4:"
//                             placeholder="Enter image tag"
//                             error={touched.imageTagFour && errors.imageTagFour}
//                             value={values.imageTagFour}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                         />
//                     </div>
//                     <button
//                     type="button"
//                     className="outline"
//                     onClick={handleReset}
//                     disabled={!dirty || isSubmitting}
//                     >
//                     Clear
//                     </button>
//                     <button type="submit" disabled={isSubmitting}>
//                     Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>    
//     );
//   };

// const MyEnhancedForm = formikEnhancer(MyForm);

// const UploadImage = () => {

//   return (
//     <MyEnhancedForm
//       className="enhanced"
//       props={{
//         imageName: "",
//         file: null,
//         userEmail: "",
//         copyright: false,
//         userCopyright: "",
//         imageTagOne: "",
//         imageTagTwo: "",
//         imageTagThree: "",
//         imageTagFour: "",
//       }}
//     />
//   );
// };

// export default UploadImage;

// const UploadImage = () => {

    //     const formik = useFormik({
    //         initialValues: {
    //                     imageName: "",
    //                     file: "",
    //                     userEmail: "",
    //                     copyright: false,
    //                     userCopyright: "",
    //                     imageTagOne: "",
    //                     imageTagTwo: "",
    //                     imageTagThree: "",
    //                     imageTagFour: "",
    //                 },
    //         validationSchema: Yup.object().shape({
    //             imageName: Yup.string().required("Image name is required.").max(150),
    //             file: Yup.mixed().required("An image file is required."),
    //             userEmail: Yup.string()
    //                 .email("Invalid email format")
    //                 .required("Email address is required.")
    //                 .max(100),
    //             copyright: Yup.bool(),
    //             userCopyright: Yup.string().max(100),
    //             imageTagOne: Yup.string().required("One image tag is required.").max(100),
    //             imageTagTwo: Yup.string().max(100),
    //             imageTagThree: Yup.string().max(100),
    //             imageTagFour: Yup.string().max(100),
    //             }),
    
    //         onSubmit: values => {
    //             console.log({
    //                 fileName: values.file.name,
    //                 type: values.file.type,
    //                 size: `${values.file.size} bytes`});
    //             console.log(values);
    
    //             const form = new FormData();
    //             form.append("file", values.file);
    //             form.append("imageName", values.imageName);
    //             form.append("userEmail", values.userEmail);
    //             form.append("copyright", values.copyright);
    //             form.append("userCopyright", values.userCopyright);
    //             form.append("imageTagOne", values.imageTagOne);
    //             form.append("imageTagTwo", values.imageTagTwo);
    //             form.append("imageTagThree", values.imageTagThree);
    //             form.append("imageTagFour", values.imageTagFour);
            
    //             //const headers = {"Content-Type": "form-data"}; 
            
    //             alert("image upload payload is " + JSON.stringify(form));
            
    //             // Send post to server & refresh page
    //             axios.post(`${baseURL}uploadImage/`, form )
    //                 .then((res) => {
    //                 console.log(JSON.stringify(res.status));
    //                 })
    //                 .catch((err) => {
    //                 console.log("error while submitting image upload form...");
    //                 console.log(err);
    //                 })
    //                 .finally(() => {
    //                     window.location.reload();
    //                 });
    
    //         }
    //     })
    
    //     // const formikInputCustomField = ({
    //     //     field,
    //     //     form: { touched, errors },
    //     //     ...props
    //     // }) => (
    //     //     <>
    //     //         <label htmlFor={field.name}>{props.labelName}</label>
    //     //         <input
    //     //             type="text"
    //     //             className="form-control"
    //     //             placeholder={props.placeholder}
    //     //             {...field}
    //     //         />
    //     //         { errors[field.name] && touched[field.name] ?
    //     //             <span>{errors[field.name]}</span>
    //     //         :null
    //     //         }
    //     //     </>  
    //     // ),
    
    //     // const formikImageUploadField = ({
    //     //     field,
    //     //     form: { touched, errors },
    //     //     ...props
    //     // }) => (
    //     //     <>
    //     //         <label htmlFor={field.name}>{props.labelName}</label>
    //     //         <input
    //     //             type="file"
    //     //             className="form-control"
    //     //             {...field}
    //     //         />
    //     //         { errors[field.name] && touched[field.name] ?
    //     //             <span>{errors[field.name]}</span>
    //     //         :null
    //     //         }
    //     //     </>
    //     // ),
    
    //     return (
    //                 <div className="container">
    //                     <div className="col-md-12 mt-5">
    //                         <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
    //                             <label htmlFor="imageName">Image Title:</label>
    //                             <input className="form-control" type="text" name="imageName" {...formik.getFieldProps("imageName")} />
    //                             {/* <Field name="imageName" component={formikInputCustomField} placeholder="Image title" labelName="Image Title:"/>                                 */}
    //                             <hr className="mb-4" />
    
    //                             <label htmlFor="file">Select an Image:</label>
    //                             <input className="form-control" type="file" name="file" id="file" accept=".png, .jpg, .jpeg, .gif" onChange={(e) => {
    //                                 formik.setFieldValue("file", e.target.files[0])}} {...formik.getFieldProps("file")} />
    //                                 {/* let reader = new FileReader(); 
    //                                 let file = e.target.files[0];
    //                                 if (file) {
    //                                     reader.onloadend = () => {
    //                                         formik.setFieldValue("file", reader.result);
    //                                     }
    //                             }}} {...formik.getFieldProps("file")} /> */}
    //                             {/* <Field name="file" component={formikImageUploadField} onChange={(e) => {
    //                                 let reader = new FileReader(); 
    //                                 let file = e.target.files[0];
    //                                 if (file) {
    //                                     reader.onloadend = () => {
    //                                         Formik.setFieldValue("file", reader.result);
    //                                     }
    //                                 }     
    //                             }} placeholder="choose image..." labelName="Image an Image:"/> */}
                                
    //                             <hr className="mb-4" />
                                
    //                             <label htmlFor="userEmail">Email:</label>
    //                             <input className="form-control" type="email" id="userEmail" name="userEmail" {...formik.getFieldProps("userEmail")} />
    //                             {/* <Field name="userEmail" component={formikInputCustomField} placeholder="email" labelName="Enter your email" /> */}
    
    //                             <hr className="mb-4" />
                                
    //                             <label htmlFor="copyright">Copyright:</label>
    //                             <input className="form-control" name="copyright" type="checkbox" {...formik.getFieldProps("copyright")} />
    //                             {/* {Formik.values.copyright}
    //                             <ErrorMessage name="copyright" />
    //                             { Formik.errors.copyright && Formik.touched.copyright ?
    //                                 <span>{ Formik.errors.copyright }</span>
    //                             :null} */}
    
    //                             <hr className="mb-4" />
    
    //                             <label htmlFor="userCopyright">Copyright Info:</label>
    //                             <input className="form-control" type="text" id="userCopyright" name="userCopyright" {...formik.getFieldProps("userCopyright")} />
    //                             {/* <Field name="userCopyright" component={formikInputCustomField} placeholder="Enter copyright" labelName="Copyright Info:"/> */}
    
    //                             <hr className="mb-4" />
    
    //                             <label htmlFor="imageTagOne">Image Tag 1:</label>
    //                             <input className="form-control" type="text" id="imageTagOne" name="imageTagOne" {...formik.getFieldProps("imageTagOne")} />
    //                             {/* <Field name="imageTagOne" component={formikInputCustomField} placeholder="Enter image tag" labelName="Image Tag 1:"/>   */}
    
    //                             <hr className="mb-4" />
    
    //                             <label htmlFor="imageTagTwo">Image Tag 2:</label>
    //                             <input className="form-control" type="text" id="imageTagTwo" name="imageTagTwo" {...formik.getFieldProps("imageTagTwo")} />
    //                             {/* <Field name="imageTagTwo" component={formikInputCustomField} placeholder="Enter image tag" labelName="Image Tag 2:"/>   */}
    
    //                             <hr className="mb-4" />
    
    //                             <label htmlFor="imageTagThree">Image Tag 3:</label>
    //                             <input className="form-control" type="text" id="imageTagThree" name="imageTagThree" {...formik.getFieldProps("imageTagThree")} />
    //                             {/* <Field name="imageTagThree" component={formikInputCustomField} placeholder="Enter image tag" labelName="Image Tag 3:"/>  */}
    
    //                             <hr className="mb-4" />
    
    //                             <label htmlFor="imageTagFour">Image Tag 4:</label>
    //                             <input className="form-control" type="text" id="imageTagFour" name="imageTagFour" {...formik.getFieldProps("imageTagFour")} />
    //                             {/* <Field name="imageTagFour" component={formikInputCustomField} placeholder="Enter image tag" labelName="Image Tag 4:"/>   */}
    
    //                             <hr className="mb-4" />
                                
    //                             {/* <div>{file && src && <ImagePreview file={file} src={src}/>}</div> */}
    
    //                             <button className="btn btn-primary btn-lg btn-block" type="submit">
    //                                 Submit
    //                             </button>
    //                         </form>
    //                     </div>
    //                 </div> 
    //     )
    // }
    
    // export default UploadImage;