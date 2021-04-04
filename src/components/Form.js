import React, { Component } from 'react'

class Form extends Component {

    state = {
        username: ""
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
            <div>
                <h3>Who is You?</h3>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" id="username" name="username" value={ this.state.username } onChange={ this.handleChange } />
                    <input type="submit" value="Enter" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addGame })(Form)
