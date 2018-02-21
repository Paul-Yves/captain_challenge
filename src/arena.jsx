import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            fighters: []
        }
    }

    componentDidMount(){
        this.fetchFightersInfo();
    }
    fetchFightersInfo(){
        const self = this;
        axios.get('fighter/')
            .then(function (response) {
                const data = response.data;
                self.setState({fighters: data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return (
            <div>
                <div className='title-bar'><h1>Arena</h1></div>
                <div className='menu-bar'>

                </div>
                <p>This is a super arena where fighters will compete</p>
            </div>
        )
    }
}
ReactDOM.render( <App />, document.getElementById('app'));