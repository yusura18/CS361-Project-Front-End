// import React from "react";
// import "../components/form.css";
// import axios from "axios";
// import baseURL from "../axios";
// import { withFormik, useFormik, Formik, FormikProvider } from "formik";
// import * as Yup from "yup";
// import classnames from "classnames";
// import ImagePreview from "./imagePreview";
// import InputReader from "../components/inputReader";
// import UploadImage from "../pages/uploadImage";


// // const InputFeedback = {error} ? <div className="input-feedback">{error}</div> : null;


// // function Label ({ children, props }) {
// //   return (
// //     <label className="label" {...props}>
// //       {children}
// //     </label>
// //   );
// // };

// // const classes = classnames("input-group", { "animated shake error": !!error });

// const UploadForm = () => {

//   const {
//     values,
//     errors,
//     touched,
//     getFieldProps,
//     submitCount,
//     handleSubmit,
//     setValues,
//     setFieldValue,
//     isSubmitting,
//     setSubmitting,
//     resetForm,
//     isValid,
//     dirty
//   } = useFormik({
//     initialValues: {
//       imageName: "",
//       imageLink: null,
//       userEmail: "",
//       copyright: false,
//       userCopyright: "",
//       imageTagOne: "",
//       imageTagTwo: "",
//       imageTagThree: "",
//       imageTagFour: "",
//     },

//     validationSchema: Yup.object().shape({
//       imageName: Yup.string().required("Image name is required.").max(150),
//       imageLink: Yup.mixed().required("An image file is required."),
//       userEmail: Yup.string()
//         .email("Invalid email format")
//         .required("Email address is required.")
//         .max(100),
//       copyright: Yup.bool(),
//       userCopyright: Yup.string().max(100),
//       imageTagOne: Yup.string().required("One image tag is required.").max(100),
//       imageTagTwo: Yup.string().max(100),
//       imageTagThree: Yup.string().max(100),
//       imageTagFour: Yup.string().max(100),
//     }),

//     onSubmit (values) {
//       let formData = new FormData();

//       formData.append("imageName", values.imageName);
//       formData.append("imageLink", values.imageLink);
//       formData.append("userEmail", values.userEmail);
//       formData.append("copyright", values.copyright);
//       formData.append("userCopyright", values.userCopyright);
//       formData.append("imageTagOne", values.imageTagOne);
//       formData.append("imageTagTwo", values.imageTagTwo);
//       formData.append("imageTagThree", values.imageTagThree);
//       formData.append("imageTagFour", values.imageTagFour);
      
//       alert("image upload payload is " + JSON.stringify(values /*form*/));

//       // Send post to server & refresh page
//       axios
//         .post(`${baseURL}uploadImage/`, values )
//         .then((res) => {
//           console.log(JSON.stringify(res.status));
//         })
//         .catch((err) => {
//           console.log("error while submitting image upload form...");
//           console.log(err);
//         })
//         .finally(() => {
//           setSubmitting(false);
//           alert("form submitted");
//           resetForm();
//         });
//     }
//   });
//   return (
//     <div className="wrapper">
//       <div className="card-border">
//         <h5 className="card-header">Upload an Image:</h5>
//         <br />
//         <div className="card-body">
//           <form className="baseForm" noValidate encType="multipart/form-data" onSubmit={handleSubmit}>
//             <div className="imageDiv">
//               <div className="input-group">
//                 <label htmlFor="imageName" error={errors.imageName}>Image Title:</label> 
//                 <input
//                   id="imageName"
//                   name="imageName"
//                   type="text"
//                   className="text-input"
//                   error={touched.imageName && errors.imageName}
//                   placeholder="Enter an image title"
//                   onChange={Formik.handleChange}
//                   onBlur={Formik.handleBlur}
//                   value={values.imageName}
//                 />
//                 {touched.imageName && errors.imageName ? (
//                   <div className="input-feedback">{errors.imageName}</div>
//                 ) : null}
//               </div>

//               <div className="input-group">
//                 <label htmlFor="imageLink" error={errors.imageLink}>Select Image:</label>
//                 <input
//                   id="file"
//                   name="file"
//                   type="file"
//                   onBlur="false"
//                   errors={touched.imageLink && errors.imageLink}
//                   onchange={e => {
//                     var file = e.taget.files[0];
//                     var reader = new FileReader();
//                     setFieldValue("file", file.name)
//                     reader.onload = function(i) {
//                       setFieldValue("imageLink", i.target.result);
//                     };
//                     reader.readAsDataURL(file)
//                     return(<ImagePreview file={values.imageLink} />)
//                   }}
//                   className="text-input"
//                 />
//                 {touched.imageLink && errors.imageLink ? (
//                   <div className="input-feedback">{errors.imageLink}</div>
//                 ) : null}
//               </div>
//             </div>  
//           </form>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default UploadImage;