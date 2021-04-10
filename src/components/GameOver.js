import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGame } from "../actions";
import  history  from "../history"

class GameOver extends Component {

    state = {
        user_id: this.props.user.id,
        timer: "",
        moves: "",
        user_attributes: this.props.user
    }

      handleSubmit = e => {
        this.props.addGame(this.state, history);
        this.props.handleModal(false)
      }

 
        render() {
        return (
            <div className="game-over">
                <button className="btn btn-primary" onClick={this.handleSubmit}>Good Job!</button>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
  }

export default connect(mapStateToProps, { addGame }) (GameOver)
