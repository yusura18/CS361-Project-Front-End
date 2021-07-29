// import React from "react";
// import ReactDOM from "react-dom";
// import axios from 'axios';
// import baseURL from '../axios';
// import { withFormik } from 'formik';
// import * as Yup from 'yup';
// import classnames from 'classnames';
// import { useForm } from 'react-hook-form';
// import Resizer from "react-image-file-resizer";
// import AutoSuggestion from '../components/autoSuggest';


// const SUPPORTED_FORMATS = [
//     "image/jpg",
//     "image/jpeg",
//     "image/gif",
//     "image/png"];

// const formikEnhancer = withFormik({
//     validationSchema: Yup.object().shape({
//         imageName: Yup.string().required("Image name is required.").max(150),
//         imageLink: Yup.mixed()
//             .required("An image file is required.")
//             .test("fileType", "Unsupported Format", (value) =>
//             SUPPORTED_FORMATS.includes(value.type)),
//         userEmail: Yup.string()
//             .email("Invalid email format")
//             .required("Email address is required.")
//             .max(100),
//         copyright: Yup.bool(),
//         userCopyright: Yup.string().max(100),
//         imageTagOne: Yup.string().required("One image tag is required.").max(100),
//         imageTagTwo: Yup.string().max(100),
//         imageTagThree: Yup.string().max(100),
//         imageTagFour: Yup.string().max(100),
//     }),

//     mapPropsToValues: ({ user }) => ({
//         ...user,
//       }),
//       handleSubmit: (payload, { setSubmitting }) => {
//         alert(payload.email);
//         setSubmitting(false);
//       },
//       displayName: 'MyForm',
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

// const TextInput = ({ type, id, label, error, value, onChange, className, ...props }) => {
//   const classes = classnames(
//     'input-group',
//     {
//       'animated shake error': !!error,
//     },
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
// };

// const MyForm = props => {
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
//       <form onSubmit={handleSubmit}>
//           <TextInput
//             id="imageName"
//             type="text"
//             label="Image Title:"
//             placeholder="Enter image title"
//             error={touched.imageName && errors.imageName}
//             value={values.imageName}
//             onChange={handleChange}
//             onBlur={handleBlur}/>
//           <TextInput
//             id="imageLink"
//             type="file"
//             label="Select Image:"
//             error={touched.imageLink && errors.imageLink}
//             value={values.imageLink}
//             onChange={handleChange}
//             onBlur={handleBlur}/>
//           <TextInput
//             id="userEmail"
//             type="email"
//             label="Email:"
//             error={touched.userEmail && errors.userEmail}
//             onChange={handleChange}
//             onBlur={handleBlur}/>
//           <TextInput
//             id="copyright"
//             type="checkbox"
//             label="Copyright:"
//             error={touched.copyright && errors.copyright}
//             onChange={handleChange}
//             onBlur={handleBlur}/>
//           <TextInput
//             id="userCopyright"
//             type="text"
//             label="Copyright Information:"
//             placeholder="Enter copyright"
//             error={touched.userCopyright && errors.userCopyright}
//             onChange={handleChange}
//             onBlur={handleBlur}/>
//           <TextInput
//             id="imageTagOne"
//             type="text"
//             label="Image Tag 1:"
//             placeholder="Enter image tag"
//             error={touched.imageTagOne && errors.imageTagOne}
//             onChange={handleChange}
//             onBlur={handleBlur}/>
//           <TextInput
//             id="imageTagTwo"
//             type="text"
//             label="Image Tag 2:"
//             placeholder="Enter image tag"
//             error={touched.imageTagTwo && errors.imageTagTwo}
//             onChange={handleChange}
//             onBlur={handleBlur}/>
//           <TextInput
//             id="imageTagThree"
//             type="text"
//             label="Image Tag 3:"
//             placeholder="Enter image tag"
//             error={touched.imageTagThree && errors.imageTagThree}
//             onChange={handleChange}
//             onBlur={handleBlur}/>
//           <TextInput
//             id="imageTagFour"
//             type="text"
//             label="Image Tag 4:"
//             placeholder="Enter image tag"
//             error={touched.imageTagFour && errors.imageTagFour}
//             onChange={handleChange}
//             onBlur={handleBlur}/>
//           <button
//             type="button"
//             className="outline"
//             onClick={handleReset}
//             disabled={!dirty || isSubmitting}>Clear</button>
//           <button type="submit" disabled={isSubmitting}>Submit</button>
//       </form>
//     );
// };                  

// const MyEnhancedForm = formikEnhancer(MyForm);



// const resizeFile = (file) =>
//   new Promise((resolve) => {
//     Resizer.imageFileResizer(
//       file,
//       768,
//       1024,
//       "JPEG",
//       100,
//       0,
//       (uri) => {
//         resolve(uri);
//       },
//       "file"
//     );
//   });


// export default class ImageForm extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             imageName: '',
//             imageLink: '',
//             userEmail: '',
//             copyright: '',
//             userCopyright: '',
//             imageTagOne: this.props.imageTag,
//             imageTagTwo: '',
//             imageTagThree: '',
//             imageTagFour: ''
//         };

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInputChange (event) {
        
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value,
//         });
//     }
        // if (event.target.name === "imageLink") {
        //     try {
        //         const file = event.target.value;
        //         const image = resizeFile(file);
        //         console.log(image);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // };
    

//     handleSubmit (event) {
//         event.preventDefault();
//         console.log("sending image upload post");

//         const payload = this.state;
//         console.log("image upload payload is " + JSON.stringify(this.state));

//         // Send post to server & refresh page
//         axios.post(`${baseURL}uploadImage/`, { payload })
//             .then(res => {
//                 console.log(JSON.stringify(res.status));
//             })
//             .catch((err) => {
//                 console.log("error while submitting review form...");
//                 console.log(err);
//             })
//             .finally(() => {
//                 console.log(this.state);
//                 window.location.reload();
//             })
//     }

//     // Render image upload form
//     render() {
//         return (     
//             <div class="card border border-dark mb-3 w-75">
//                 <h5 class="card-header">Upload an Image:</h5>
//                 <div class="card-body">
//                     <form onSubmit={this.handleSubmit}>
//                         <input type="file" placeholder="Upload image" name="imageLink" value={this.state.imageLink} onChange={this.handleInputChange} /*{...register("Upload image", {required: true})}*/ />
//                         <input type="text" placeholder="Image Name" name="imageName" value={this.state.imageName} onChange={this.handleInputChange} /*{...register("Image Name", {required: true})}*/ />
//                         <input type="text" placeholder="Email" name="userEmail" value={this.state.userEmail} onChange={this.handleInputChange} /*{...register("Email", {required: true, pattern: /^\S+@\S+$/i})}*/ />
//                         <input type="checkbox" placeholder="Help?" /*{...register("Help?", {})}*/ />
//                         <input type="checkbox" placeholder="copyright?" name="copyright" value={this.state.copyright} onChange={this.handleInputChange} /*{...register("copyright?", {})}*/ />
//                         <input type="text" placeholder="copyright info" name="userCopyright" value={this.state.userCopyright} onChange={this.handleInputChange} /*{...register("copyright info", {})}*/ />
//                         <input type="text" name="imageTagOne" value={this.state.imageTagOne} onChange={this.handleInputChange} /*{...register("imageTag1", { required: true })}*/ />
//                         <input type="text" name="imageTagTwo" value={this.state.imageTagTwo} onChange={this.handleInputChange} /*{...register("imageTag2", {})}*/ />
//                         <input type="text" name="imageTagThree" value={this.state.imageTagThree} onChange={this.handleInputChange} /*{...register("imageTag3", {})}*/ />
//                         <input type="text" name="imageTagFour" value={this.state.imageTagFour} onChange={this.handleInputChange} /*{...register("imageTag4", {})}*/ />
//                         <input type="submit" />
//                     </form>
//                 </div>
//             </div>

//         )
//     }
// }
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   console.log(errors);