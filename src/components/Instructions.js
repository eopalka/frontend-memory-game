import React, { Component } from 'react'

class Instructions extends Component {
    render() {
        return (
            <div className= "login">
                <h2>Instructions</h2>
              
                <h4>Click on a card to have it turn over</h4>
                <h4>Click on a scond card to see if they match</h4>
                <h4>If the cards match, they will stay facing up</h4>
                <h4>If they do not match, they will turn back around</h4>
                <h4>Keep track of what you turned over so you can match it later</h4>
                <h4>Try to match all cards with the least amount of moves</h4>
            </div>
        )
    }
}

export default Instructions