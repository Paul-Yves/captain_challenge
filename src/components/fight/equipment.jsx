import React, { Component } from "react";
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

/**
 * Implements the drag source contract.
 */
const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            name: props.name,
            hand_slot: props.hand_slot,
            body_slot: props.body_slot,
        };
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        if (dropResult && dropResult.fighter){
            dropResult.fighter.addEquipment(item);
        }
    },
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

/**
 * Component used as drag source to represent an equipment that fighter can use in fight
 */
class Equipment extends Component{
    render(){
        const { isDragging, connectDragSource, name } = this.props;
        return connectDragSource(<div className="equipment">{name}</div>)
    }
}
Equipment.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hand_slot: PropTypes.number.isRequired,
    body_slot: PropTypes.number.isRequired
};
export default DragSource('EQUIPMENT', cardSource, collect)(Equipment);