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
        const historyList = this.props.fights.length > 0 ?
            <div className="history-list">
                {this.props.fights.map((fight)=>this.renderFight(fight))}
            </div> : '';
        return <div className="history">
            <h2>Fights history</h2>
            {historyList}
        </div>
    }
}

export default History;