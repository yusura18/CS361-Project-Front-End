// import React from 'react';
// import FileReaderInput from 'react-file-reader-input';


// class InputReader extends React.Component {
//   handleChange = (e, results) => {
//     results.forEach(result => {
//       const [e, file] = result;
//       this.props.dispatch(e.target.result);
//       console.log(`Successfully uploaded ${file.name}!`);
//     });
//   }
//   render() {
//     return (
//       <form>
//         <FileReaderInput as="url" id="imageLink"
//                          onChange={this.handleChange}>
//           <button>Browse</button>
//         </FileReaderInput>
//       </form>
//     );
//   }
// }

// export default InputReader;