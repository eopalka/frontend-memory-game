import React, { Component } from 'react'

class Header extends Component {
    render() {
        const { username, games_played } =this.props
        return (
            <div>
                <div className="username">Player: {username}</div>
                <div className="games_played">Games Played: {games_played}</div>
                
            </div>
        )
    }
}

export default Header
