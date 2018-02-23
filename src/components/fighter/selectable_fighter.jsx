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
        const total_fights = this.props.victories + this.props.losses;
        let ratio = total_fights === 0 ? 'N/A' : Math.round(100*this.props.victories / total_fights)+"%";
        return <div className={className}>
            <h2>{this.props.name}</h2>
            {this.renderStatsBlock()}
            <div>Victory ratio: {ratio}</div>
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