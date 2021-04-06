import React, { Component } from 'react'
import { connect } from 'react-redux';
import ScoreBoard from './ScoreBoard';

class Index extends Component {
    render() {
        const games = this.props.games.map( (game, i) => <ScoreBoard key={i} timer={ game.timer } moves={ game.moves } user={ game.username }/> )
        return (
            <div>
                { games }
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(Index);