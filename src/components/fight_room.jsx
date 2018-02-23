import React, { Component } from "react";
import axios from "axios/index";
import SelectableFighter from './fighter/selectable_fighter'
class FightRoom extends Component{
    constructor(props){
        super(props)
        this.state = {
            fighters: [],
            selected: [],
            warning: null
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
    toggleSelectFighter(fighter){
        let selected = this.state.selected;
        const position = selected.indexOf(fighter);
        if (position >= 0){
            selected.splice(position, 1);
        } else {
            if (selected.length > 1){
                selected = [selected[1], fighter];
            } else {
                selected = selected.concat(fighter);
            }
        }
        this.setState({selected, warning: null});
    }
    fight(){
        if (this.state.selected.length !== 2){
            return this.setState({warning: "A fight must occur between to warriors, no less, no more"});
        }

    }
    render(){
        return <div className="arena">
            <div className="fighter-list">
                {
                    this.state.fighters.map((fighter)=>
                        <SelectableFighter {...fighter} key={fighter.id}
                                           selected={this.state.selected.indexOf(fighter)>=0}
                                           onSelect={()=>this.toggleSelectFighter(fighter)}/>
                    )
                }
            </div>
            <button onClick={()=>this.fight()}>Launch fight</button>
        </div>
    }
}

export default FightRoom;