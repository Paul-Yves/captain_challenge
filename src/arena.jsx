import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'
import Home from './components/home';
import PrepRoom from './components/prep_room';
import FightRoom from './components/fight_room';

class App extends Component{

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