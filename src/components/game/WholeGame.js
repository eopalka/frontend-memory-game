import React, { Component } from 'react'
import { connect } from 'react-redux';
import GameOver from './GameOver'
import Game from './Game'
import Header from './Header'
import { updateGamesPlayed } from '../../actions'

class WholeGame extends Component {
  state = {
    user: {
      games_played: this.props.user.games_played,
      username: this.props.user.username,
      id: this.props.user.id,
    },
    game: {
      moves: 0,
    },
    showGameOver: false,
  };

  handleModal = (boolean) => {
    this.setState({ showGameOver: boolean });
  };

  handleGameOver = (boolean) => {
    if (boolean) {
      this.setState({
        showGameOver: boolean,
        games_played: this.props.user.games_played,
      });
      this.props.updateGamesPlayed(this.state.user.games_played);
    } else {
      this.setState({ showGameOver: boolean });
    }
  };

  handleResetMoves = () => {
    this.setState({ game: { moves: 0 } });
  };

  handleMoveCount = (currentMove) => {
    this.setState({
      game: {
        moves: currentMove,
      },
    });
  };

  render() {
    const { showGameOver } = this.state;
    const { user } = this.props;
    return (
      <div>
        {showGameOver && (
          <GameOver
            newGame={this.handleGameOver}
            handleModal={this.handleModal}
            handleResetMoves={this.handleResetMoves}
            moves={this.state.game.moves}
          />
        )}
        <Header username={user.username} games_played={user.games_played} />
        <div className="App-header">Moves:{this.state.game.moves}</div>
        <Game
          handleGameOver={this.handleGameOver}
          showGameOver={this.state.showGameOver}
          handleMoveCount={this.handleMoveCount}
          moves={this.state.game.moves}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, {updateGamesPlayed})(WholeGame)
