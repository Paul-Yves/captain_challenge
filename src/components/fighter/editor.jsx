import React, { Component } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
/**
 * Component to create or edit a fighter
 */
class FighterEditor extends Component{
    constructor(props){
        super(props);
        this.state = this.baseStateFromProps(props)
    }

    componentWillReceiveProps(nextProps){
        this.setState(this.baseStateFromProps(nextProps))
    }

    baseStateFromProps(props){
        let points = 25;
        if (props.fighter) {
            points = 115 - (props.fighter.strength + props.fighter.ability + props.fighter.speed)
        }
        return {
            name: (props.fighter && props.fighter.name)|| "Captain new",
            max_life: (props.fighter && props.fighter.max_life)|| 12,
            strength: (props.fighter && props.fighter.strength)|| 30,
            ability: (props.fighter && props.fighter.ability)|| 30,
            speed: (props.fighter && props.fighter.speed)|| 30,
            points
        }
    }

    handleChange(value, attribute){
        let state = Object.assign({}, this.state);
        state[attribute] = parseInt(value);
        let points = 115 - (state.strength + state.ability + state.speed);
        if (points >= 0){
            state.points = points;
            this.setState(state);
        }
    }

    save(){
        const self = this;
        const route = this.props.fighter ? 'fighter/'+this.props.fighter.id : 'fighter';
        const params = Object.assign({authenticity_token: window._token}, this.state)
        axios.post(route, params)
            .then(function (response) {
                self.props.onSaved();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        const title = this.props.fighter ? 'Fighter edition' : 'Fighter creation';
        return <div className="fighter-editor">
            <h2>{title}</h2>
            <div className="stats">
                <div className="stat">
                    Name:
                    <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} type="text"/>
                </div>
                <div className="stat">Remaining points: {this.state.points}</div>
                <div className="stat">Life: {this.state.max_life}</div>
                <div className="stat">
                    Strength:
                    <input onChange={(e) => this.handleChange(e.target.value, 'strength')} value={this.state.strength} type="number"/>
                </div>
                <div className="stat">
                    Ability:
                    <input onChange={(e) => this.handleChange(e.target.value, 'ability')} value={this.state.ability} type="number"/>
                </div>
                <div className="stat">
                    Speed:
                    <input onChange={(e) => this.handleChange(e.target.value, 'speed')} value={this.state.speed} type="number"/>
                </div>
                <button onClick={this.save.bind(this)}>Save</button>
            </div>
        </div>
    }
}

FighterEditor.propTypes = {
    fighter: PropTypes.object,
    onSaved: PropTypes.func.isRequired
};

export default FighterEditor;