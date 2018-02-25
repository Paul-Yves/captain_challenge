import React from "react";
import PropTypes from 'prop-types';
import FighterCard from './fighter_card';
import { DropTarget } from 'react-dnd';


const cardTarget = {
    drop({id, name}, monitor, component) {
        return { id, name, fighter: component};
    },
};
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    };
}

/**
 * Component to display basic information about a fighter
 */
class SelectableFighter extends FighterCard{
    constructor(props){
        super(props);
        this.state = {equipment: []}
    }

    addEquipment(equipment){
        const hand = this.state.equipment.reduce((hand, eq) => hand + eq.hand_slot, equipment.hand_slot);
        const body = this.state.equipment.reduce((hand, eq) => hand + eq.body_slot, equipment.body_slot);
        if (hand <= 2 && body <= 1){
            const equipments = this.state.equipment.concat(equipment);
            this.setState({equipment: equipments});
            this.props.onChangeEquipment(equipments.map((eq)=>eq.id));
        }
    }

    render(){
        const { canDrop, isOver, connectDropTarget } = this.props;
        const className = this.props.selected ? "fighter-card selected" : "fighter-card";
        const selectLabel = this.props.selected ? "Unselect" : "Select";
        const total_fights = this.props.victories + this.props.losses;
        const ratio = total_fights === 0 ? 'N/A' : Math.round(100*this.props.victories / total_fights)+"%";
        return connectDropTarget(<div className={className}>
            <h2>{this.props.name}</h2>
            {this.renderStatsBlock()}
            <div>Victory ratio: {ratio}</div>
            <div className="equipment-list">
                {this.state.equipment.map((equipment, idx) =>
                    <div className="equipment" key={equipment.id+"_"+idx}>{equipment.name}</div>)
                }
            </div>
            <button onClick={()=>this.setState({equipment: []})}>Clear equipment</button>
            <button onClick={()=>this.props.onSelect()}>{selectLabel}</button>
        </div>)
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
    onChangeEquipment: PropTypes.func.isRequired, //expect as arg a list of id corresponding to equipment
};
export default DropTarget('EQUIPMENT', cardTarget, collect)(SelectableFighter);