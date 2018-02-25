import React, { Component } from "react";
import axios from "axios/index";
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SelectableFighter from './fighter/selectable_fighter';
import Armory from './fight/armory';
import History from './fight/history';

class FightRoom extends Component{
    constructor(props){
        super(props)
        this.equipmentMap = {};
        this.state = {
            fighters: [],
            fights: [],
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
                self.setState({fighters: data, selected: []});
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('fight/index')
            .then(function (response) {
                const data = response.data;
                self.setState({fights: data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    toggleSelectFighter(fighter, equipments){
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
        this.equipmentMap[fighter.id] = equipments.map((eq)=>eq.id);
        this.setState({selected, warning: null});
    }
    fight(){
        if (this.state.selected.length !== 2){
            return this.setState({warning: "A fight must occur between to warriors, no less, no more"});
        }
        const self = this;
        const fighters = self.state.selected.map(fighter => Object.assign({equipment: self.equipmentMap[fighter.id]}, fighter));
        axios.post('fight', {authenticity_token: window._token, fighters})
            .then(function (response) {
                self.fetchFightersInfo();
                alert('Winner : '+response.data.winner.name);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render(){
        return <div className="arena">
            <DragDropContextProvider backend={HTML5Backend}>
                <div className="prep-room">
                    <div className="fighter-list">
                        {
                            this.state.fighters.map((fighter)=>
                                <SelectableFighter {...fighter} key={fighter.id}
                                                   selected={this.state.selected.indexOf(fighter)>=0}
                                                   onSelect={(equipments)=>this.toggleSelectFighter(fighter, equipments)}/>
                            )
                        }
                    </div>
                    <div className="armory">
                        <Armory />
                    </div>
                </div>
            </DragDropContextProvider>
            <button onClick={()=>this.fight()}>Launch fight</button> <span className="warning">{this.state.warning}</span>
            <History fights={this.state.fights} />
        </div>
    }
}

export default FightRoom;