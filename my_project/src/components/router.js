import React, { Component } from 'react';
import Navbar from '../components/navbar/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import UploadImage from '../pages/uploadImage';
import SearchImages from '../pages/searchImages';
import UserImages from '../pages/userImages';
import About from '../pages/about';


class Routes extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/home' exact component={Home} />
                    <Route path='/uploadImage' component={UploadImage} />
                    <Route path='/searchImage' component={SearchImages} />
                    <Route path='/userImages' component={UserImages} />
                    <Route path='/about' component={About} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;