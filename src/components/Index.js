import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game from './Game';

class Index extends Component {
    render() {
        const games = this.props.games.map( (game, i) => <Game key={i} timer={ game.timer } moves={ game.moves } /> )
        return (
            <div>
                { games }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(Index);