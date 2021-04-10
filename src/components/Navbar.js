import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/instructions">Instructions</Link></li>
                    <li><Link to="/game">Play Game</Link></li>
                    <li><Link to="/scoreboard">Score Board</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar