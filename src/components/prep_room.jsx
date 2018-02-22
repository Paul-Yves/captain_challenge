import React, { Component } from "react";
import axios from "axios/index";
import FighterCard from "./fighter/fighter_card";
import FighterEditor from "./fighter/editor";

class PrepRoom extends Component{
    constructor(props){
        super(props)
        this.state = {
            fighters: [],
            selected_fighter: null
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
        return <div className="prep-room">
            <div className="fighter-list">
                {
                    this.state.fighters.map((fighter)=>
                        <FighterCard {...fighter} key={fighter.id}
                            onEdit={()=>this.setState({selected_fighter: fighter})}
                            onDeleted={()=>this.fetchFightersInfo()}/>
                    )
                }
            </div>
            <div className="fighter-creation">
                <button onClick={()=>this.setState({selected_fighter: null})}>New fighter</button>
                <FighterEditor fighter={this.state.selected_fighter} onSaved={()=>this.fetchFightersInfo()}/>
            </div>
        </div>
    }
}

export default PrepRoom;