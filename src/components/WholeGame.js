import React, { Component } from 'react'
import GameOver from './GameOver'
import Game from './Game'

export class WholeGame extends Component {

    state = {
        showGameOver: false
      }
    
      handleGameOver = (boolean) => {
        if (boolean) {
          this.setState({ showGaveOver: boolean, score: this.state.score + 1 });
        } else {
          this.setState({ showGameOver: boolean });
        }
      };


    render() {
        const { showGameOver} = this.state
        return (
            <div>
                {showGameOver ? <GameOver newGame={this.handleGameOver} /> : null}
                < Game gameOver={this.handleGameOver} />
            </div>
        )
    }
}

export default WholeGame
