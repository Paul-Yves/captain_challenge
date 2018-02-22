import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'
import axios from 'axios';
import Home from './components/home';
import PrepRoom from './components/prep_room';
import FightRoom from './components/fight_room';

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
        axios.get('fighter/index')
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
            <Router>
                <div>
                    <div className="title-bar"><h1>Arena</h1></div>
                    <div className="menu-bar">
                        <NavLink to="/" className="menu-item" exact activeClassName="selected">Home</NavLink>
                        <NavLink to="/prep" className="menu-item" activeClassName="selected">Preparation Room</NavLink>
                        <NavLink to="/fight" className="menu-item" activeClassName="selected">Arena</NavLink>
                    </div>
                    <div className="app-content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/prep" component={PrepRoom}/>
                        <Route path="/fight" component={FightRoom}/>
                    </div>
                </div>
            </Router>
        )
    }
}
ReactDOM.render( <App />, document.getElementById('app'));