import React, { Component } from 'react'
import { connect } from 'react-redux';
import GameOver from './GameOver'
import Game from './Game'
import Header from './Header'
import { updateGamesPlayed } from '../actions'

class WholeGame extends Component {
  
  state = {
    user: {
      games_played: this.props.user.games_played,
      username: this.props.user.username,
      id: this.props.user.id
    },
    showGameOver: false
  }
  
  handleModal = (boolean) => {
    this.setState({ showGameOver: boolean})
  }
  
  handleGameOver = (boolean) => {
    if (boolean) {
      this.setState({ showGameOver: boolean, games_played: this.props.user.games_played });
      this.props.updateGamesPlayed(this.state.user.games_played)
    } else {
      this.setState({ showGameOver: boolean });
    }
  };
  
  render() {

      const { showGameOver } = this.state
      const { user } = this.props
        return (
            <div>
                {showGameOver ? <GameOver newGame={this.handleGameOver} handleModal={this.handleModal} /> : null}
                < Header username={user.username} games_played={user.games_played} />
                < Game gameOver={this.handleGameOver} />
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, {updateGamesPlayed})(WholeGame)
