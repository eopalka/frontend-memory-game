import React, { Component } from 'react'
import Card from './Card/Card'

class Game extends Component {
    render() {
        const { timer, moves } =this.props;
        return (
            <div>
                <h3>{ timer }</h3>
                <h3>{ moves }</h3>
                <Card />
                
            </div>
        )
    }
}

export default Game
