import React, { Component } from 'react'
import Card from './Card'

class Game extends Component {

    render() {
        return (
            <div className= "gameboard">
                <Card gameOver={this.props.gameOver}/> 
            </div>
        )
    }
}

export default Game
