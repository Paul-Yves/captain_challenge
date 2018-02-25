import React, { Component } from "react";
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
class Equipment extends Component{
    render(){
        const { isDragging, connectDragSource, name } = this.props;
        return connectDragSource(<div className="equipment">{name}</div>)
    }
}
export default DragSource('EQUIPMENT', cardSource, collect)(Equipment);