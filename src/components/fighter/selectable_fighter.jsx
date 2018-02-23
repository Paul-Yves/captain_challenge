import React from "react";
import PropTypes from 'prop-types';
import FighterCard from './fighter_card';
import axios from 'axios';
/**
 * Component to display basic information about a fighter
 */
class SelectableFighter extends FighterCard{
    render(){
        let className = this.props.selected ? "fighter-card selected" : "fighter-card";
        return <div className={className}>
            <h2>{this.props.name}</h2>
            {this.renderStatsBlock()}
            <div>Victories: {this.props.victories}</div>
            <div>Losses: {this.props.losses}</div>
            <button onClick={()=>this.props.onSelect()}>Select</button>
        </div>
    }
}

SelectableFighter.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    max_life: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    ability: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    victories: PropTypes.number.isRequired,
    losses: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default SelectableFighter;