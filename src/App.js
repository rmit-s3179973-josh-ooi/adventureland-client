import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './components/navigation';
import './App.css';



class App extends Component {

    constructor(){
        super();

        this.state = {
          category : []
        }

    }

    getCategory() {

        axios.get('http://localhost:8000/api/categories')
        .then((response) =>{
        
        this.setState({ category : response.data});
        })
        .catch( (error) => {
        console.log(error);
        });        
    }

    componentWillMount() {
        this.getCategory();
    }

    componentDidMount() {
        this.getCategory();
    }

    navigate(name){
        console.log(name);
    }

    render() {
        return (
            <div className="App">
                <div className="left">
                    <Navigation categories={this.state.category} navigate={this.navigate.bind(this)} />
                </div>
                <div className="right"></div>
            </div>
        );
    }
}

export default App;
