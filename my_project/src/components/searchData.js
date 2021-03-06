import React, {
	useState, useEffect,
	} from 'react';
import axios from 'axios';
import baseURL from '../axios';
import ImageGrid from './imageGrid';

class SearchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            resData: [],
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

		this.setState({
			[name]: value
		});

    }

    // Retrieves only filtered images and image tags by user email
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("launching filter function")
        if(this.state.query === "" || !this.state.query) {
            alert("Empty query");
        } else {
            let reqURL = `${baseURL}userImages/?q=${this.state.query}`;
            axios.get(reqURL, { crossDomain: true })
                .then(res => {
                    const resJSON = JSON.parse(res.data.images);
                    console.log(resJSON);
                    console.log("data set");
                    this.setState({resData: resJSON});
                })
                .catch((err) =>{
                    console.log("get request error...")
                    console.log(err);
                })
        }
    }

    // Function that will update state with current search filter
    updateStateHandler = () => {
        axios.get(`${baseURL}userImages/?q=${this.state.query}`)
            .then(res => {
                const resJSON = JSON.parse(res.data.images);
                console.log(resJSON);
                this.setState({resData: resJSON});
            })
            .catch((err) =>{
                console.log("get request error...")
                console.log(err);
            })
    }
    
    handleClear(event) {
        event.preventDefault();
        console.log("clearing filters");
        this.state.query = "";
        window.location.reload();
    }

    // Render search form
    render() {
        return (
            <section>
                <form style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <h2 style={{textAlign: "center", margin: 10, fontSize: "24px"}}>View Your Images</h2>
                    <label style={{textAlign: "center", fontSize: "16px", fontWeight: "bold", padding: "10px"}}>
                        Enter Email:
                        <div>
                            <input 
                                style={{textAlign: "center", fontSize: "14px"}}
                                type='text' 
                                value={this.state.query} 
                                name='query' 
                                onChange={this.handleInputChange}/>
                        </div>
                    </label>
                    <input 
                        style={{textAlign: "center", alignSelf: "center", 
                                width: "fit-content", position: "inherit", 
                                fontSize: "14px", fontWeight: "bold", 
                                margin: 5, padding: 5}} 
                        type="submit" value="Search" 
                        onClick={this.handleSubmit} 
                        autoFocus/>
                    <input 
                        style={{textAlign: "center", alignSelf: "center",
                            width: "fit-content", fontSize: "14px",
                            fontWeight: "bold", margin: 5, padding: 5}} 
                        type="submit" 
                        value="Clear Filter" 
                        onClick={this.handleClear}/>
                </form>
                <div>
                    <ImageGrid data={this.state.resData} updateState={this.updateStateHandler}/>
                </div>
            </section>

        )
    }

}

export default SearchData;