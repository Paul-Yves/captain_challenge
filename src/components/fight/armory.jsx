import React, { Component } from "react";
import axios from "axios/index";
import Equipment from "./equipment";

class Armory extends Component{
    constructor(props){
        super(props)
        this.state = {
            equipment: []
        }
    }
    componentDidMount() {
        const self = this;
        axios.get('equipment/index')
            .then(function (response) {
                const data = response.data;
                self.setState({equipment: data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    renderEquipment(equipment){
        return <Equipment key={equipment.id} {...equipment}/>
    }
    render(){
        return <div>
            <h2>Equipment</h2>
            <p>Drag and drop equipment for fighters</p>
            {this.state.equipment.map((equipment)=>this.renderEquipment(equipment))}
        </div>
    }
}

export default Armory;