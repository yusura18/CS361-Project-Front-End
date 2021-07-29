// import React from "react";
// import PropTypes from "prop-types";
// import AutoSuggest from "react-autosuggest";
// import "./suggeststyles.css";


// const getSuggestions = value => {
//     const escapedValue = value.trim();

//     if (escapedValue === '') {
//         return [];
//     }

//     const suggestions = this.props.imageTag[0].filter(tags => tags.imageTag1);

//     if (suggestions.length === 0) {
//         return [
//             { isAddNew: true }
//         ];
//     }

//     return suggestions;
// }

// export default class AutoSuggestion extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             value: '',
//             suggestions: []
//         };
//     }

//     onChange = (event, { newValue, method }) => {
//         this.setState({
//             value: newValue
//         });
//     };

//     getSuggestionValue = suggestion => {
//         if (suggestion.isAddNew) {
//             return this.state.value;
//         }

//         return suggestion.name;
//     };

//     renderSuggestion = suggestion => {
//         if (suggestion.isAddNew) {
//             return (
//                 <span>
//                     [+] New tag: <strong>{this.state.value}</strong>
//                 </span>
//             );
//         }

//         return suggestion.name;
//     };

//     onSuggestionsFetchRequested = ({ value }) => {
//         this.setState({
//             suggestions: getSuggestions(value)
//         });
//     };

//     onSuggestionsClearRequested = () => {
//         this.setState({
//             suggestions: []
//         });
//     };

//     onSuggestionSelected = (event, { suggestion }) => {
//         if (suggestion.isAddNew) {
//             console.log('Add new tag: ', this.state.value);
//         }
//     };

//     render() {
//         const { value, suggestions } = this.state;
//         const inputProps = {
//             placeholder: "Type Image Tag",
//             value,
//             onChange: this.onChange
//         };

//         return (
//             <div>
//                 <Autosuggest suggestions={suggestions}
//                     onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//                     onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//                     getSuggestionValue={this.getSuggestionValue}
//                     renderSuggestion={this.renderSuggestion}
//                     onSuggestionSelected={this.onSuggestionSelected}
//                     inputProps={inputProps}
//                 />
//             </div>
//         );
//     }
// }
