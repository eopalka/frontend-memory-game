import React, { Component } from 'react'

class ScoreBoard extends Component {
    render() {
        const { user } = this.props
        const { timer, moves, username, games_played} =this.props
        return (
            <div>
                <h3>Player: { username }</h3>
                <h2>Timer: { timer }</h2>
                <h2>Moves: { moves }</h2>
                <h4>Total Games Played: { games_played } </h4>
                <hr/>
            </div>
        )
    }
}

export default ScoreBoard
