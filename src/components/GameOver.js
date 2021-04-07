import React, { Component } from 'react'

export class GameOver extends Component {
    handleClick = () => {
        this.props.StartGame(false)
    }   
        render() {
        return (
            <div className="game-over">
        <button className="btn btn-primary" onClick={this.handleClick}>Play Again?</button>    
            </div>
        )
    }
}

export default GameOver
