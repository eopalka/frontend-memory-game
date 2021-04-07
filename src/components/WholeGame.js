import React, { Component } from 'react'
import GameOver from './GameOver'
import Game from './Game'
import Login from './Login'

export class WholeGame extends Component {

    state = {
        showGameOver: false,
        showLogin :true,
      }
    
      handleGameOver = (boolean) => {
        if (boolean) {
          this.setState({ showGaveOver: boolean, score: this.state.score + 1 });
        } else {
          this.setState({ showGameOver: boolean });
        }
      };

      handleLogin = (username, boolean) => {
          this.setState({username: username, showLogin: boolean })
      }


    render() {
        const { showGameOver, showLogin} = this.state
        return (
            <div>
                {showGameOver ? <GameOver newGame={this.handleGameOver} /> : null}
                {showLogin ? <Login username={this.handleLogin} history={this.props.history} /> : null}
                < Game gameOver={this.handleGameOver} />
            </div>
        )
    }
}

export default WholeGame
