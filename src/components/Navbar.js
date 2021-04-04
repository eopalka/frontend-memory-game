import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/instructions">Instructions</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
