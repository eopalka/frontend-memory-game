import React, { Component } from 'react'

class ScoreBoard extends Component {
    render() {
        const { timer, moves } =this.props;
        return (
            <div>
                <h3>{ timer }</h3>
                <h3>{ moves }</h3>
                
            </div>
        )
    }
}

export default ScoreBoard
