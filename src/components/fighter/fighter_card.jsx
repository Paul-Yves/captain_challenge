import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
/**
 * Component to display basic information about a fighter
 */
class FighterCard extends Component{

    delete(){
        const self = this;
        axios.post('fighter/'+this.props.id+'/delete', {authenticity_token: window._token})
            .then(function (response) {
                self.props.onDeleted();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return <div className="fighter-card">
            <h2>{this.props.name}</h2>
            <div className="stats">
                <div className="stat">Life: {this.props.max_life}</div>
                <div className="stat">Strength: {this.props.strength}</div>
                <div className="stat">Ability: {this.props.ability}</div>
                <div className="stat">Speed: {this.props.speed}</div>
            </div>
            <button onClick={()=>this.props.onEdit()}>Edit</button>
            <button onClick={()=>this.delete()}>Delete</button>
        </div>
    }
}

FighterCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    max_life: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    ability: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
};

export default FighterCard;