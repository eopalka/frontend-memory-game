import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser } from "../actions";

class Login extends Component {
    state = {
        username: "",
    }

    handleChange = e => {
      this.setState({ 
          [e.target.name]: e.target.value 
        })
    }
    
    handleSubmit = e => {
      e.preventDefault()
      this.props.addUser(this.state);
    }


    render() {
      return (
          <div className="login">
            <h3>Who is You?</h3>
            <br></br>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" id="username" name="username" value={ this.state.username } onChange={ this.handleChange } />
                    <input type="submit" value="Enter" />
                </form>
                <br></br>
                <br></br>
          </div>
      )
    }
  }

  export default connect(null, {addUser}) (Login)
