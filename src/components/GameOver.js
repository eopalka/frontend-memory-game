import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGame } from "../actions";
import  history  from "../history"
import { Link } from 'react-router-dom';

class GameOver extends Component {

    state = {
        user_id: this.props.user.id,
        moves: this.props.moves,
        user_attributes: this.props.user
        
    }

      handleSubmit = e => {
        console.log(this.props.addGame)
        this.props.addGame(this.state, history)
        this.props.handleModal(false)
        this.props.handleResetMoves()
      }

        render() {
        return (
            <div className="game-over">
                <Link to="/scoreboard"><button className="btn btn-primary" onClick={this.handleSubmit}>Good Job!</button></Link>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
  }

export default connect(mapStateToProps, { addGame }) (GameOver)
