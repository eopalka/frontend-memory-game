export const getGames = () => {
    return dispatch => {
        dispatch({ type: "LOADING" })
        fetch("http://localhost:3001/games")
            .then(resp => resp.json())
            .then(games => dispatch({ type:"SET_GAMES", games }))
    }
}