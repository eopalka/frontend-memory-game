import React, { Component } from 'react'
import { connect } from 'react-redux';
import ScoreBoard from './ScoreBoard';

class Index extends Component {
    render() {
        const games = this.props.games.map( (game, i) => <ScoreBoard key={i} moves={ game.moves } username={ game.user.username } games_played={ game.user.games_played}/> )
        return (
            <div>
                { games }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        games: state.games,
        user: state.user
    }
}

export default connect(mapStateToProps)(Index);