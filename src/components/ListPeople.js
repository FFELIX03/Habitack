import React, { Component } from 'react';
import axios from 'axios';

export default class ListPeople extends Component {
    constructor(props){
        super(props);
        this.state = {
            peopleList: []
        }
        this.getPeople = this.getPeople.bind(this);
    }


    componentDidMount = () => {
        this.getPeople();
    }

     getPeople(){
            axios.get('http://localhost:4000/people/')
            .then((response) => {
            console.log(response);
            this.setState({
            peopleList : response.data
            })
            console.log(this.peopleList)
        })
            .catch((error) => {
            console.log(error);
            })
        }

    render(){
        
    return(
        <ol>
            {this.state.peopleList.map((p,key) => (<li key = {key}>{p.firstName}</li>))}
        </ol>
    )}
}
