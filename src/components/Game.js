import React, { Component } from 'react'
import Card from './Card'

class Game extends Component {

    state = {
        game: {
            moves: this.props.moves
        }
    }

    render() {
        return (
            <div className= "gameboard">
                <Card handleGameOver={this.props.handleGameOver} showGameOver={this.props.showGameOver} handleMoveCount={this.props.handleMoveCount} /> 
            </div>
        )
    }
}

export default Game
