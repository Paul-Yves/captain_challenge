import React, { Component } from "react";
import PropTypes from 'prop-types';
/**
 * Component to display basic information about a fighter
 */
class FighterCard extends Component{
    renderStatsBlock(){
        return <div className="stats">
                    <div className="stat">Life: {this.props.max_life}</div>
                    <div className="stat">Strength: {this.props.strength}</div>
                    <div className="stat">Ability: {this.props.ability}</div>
                    <div className="stat">Speed: {this.props.speed}</div>
                </div>
    }
    render(){
        return <div className="fighter-card">
            <h2>{this.props.name}</h2>
            {this.renderStatsBlock()}
        </div>
    }
}

FighterCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    max_life: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    ability: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired
};

export default FighterCard;