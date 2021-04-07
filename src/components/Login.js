import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addGame } from "../actions";

class Login extends Component {
    state = {
        user_attributes: ""
    }

    handleChange = e => {
      this.setState({ 
          [e.target.name]: e.target.value 
        })
    }
    handleSubmit = e => {
      e.preventDefault();
      this.props.addGame(this.state, this.props.history);
    }

    render() {
      return (
          <div className="login">
            <h3>Who is You?</h3>
            <br></br>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" id="username" name="user_attributes" value={ this.state.user_attributes } onChange={ this.handleChange } />
                    <input type="submit" value="Enter" />
                </form>
          </div>
      )
    }
  }

  export default connect(null, { addGame })(Login)
