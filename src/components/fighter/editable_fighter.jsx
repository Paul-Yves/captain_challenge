import React from "react";
import PropTypes from 'prop-types';
import FighterCard from './fighter_card';
import axios from 'axios';
/**
 * Component to display basic information about a fighter
 */
class EditableFighter extends FighterCard{

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
            {this.renderStatsBlock()}
            <button onClick={()=>this.props.onEdit()}>Edit</button>
            <button onClick={()=>this.delete()}>Delete</button>
        </div>
    }
}

EditableFighter.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    max_life: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    ability: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
};

export default EditableFighter;