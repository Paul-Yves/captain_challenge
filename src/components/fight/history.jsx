import React, { Component } from "react";

class History extends Component{
    renderFight(fight){
        return <div key={fight.id} className="fight-history">
            <div>Date: {(new Date(fight.created_at)).toLocaleString()}</div>
            <div>Winner: {fight.winner}</div>
            <div>Looser: {fight.looser}</div>
        </div>
    }
    render(){
        return <div className="history">
            <h2>Fights history</h2>
            <div className="history-list">
                {this.props.fights.map((fight)=>this.renderFight(fight))}
            </div>
        </div>
    }
}

export default History;