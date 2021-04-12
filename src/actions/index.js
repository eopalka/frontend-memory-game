export const currentUser = (user) => ({ type: "CREATE_USER", payload: user })
export const updateGamesPlayed = (games_played) => ({ type: "UPDATE_GAMES_PLAYED", payload: games_played })

export const getGames = () => {
    return dispatch => {
        dispatch({ type: "LOADING" })
        fetch("http://localhost:3001/games")
            .then(resp => resp.json())
            .then(games => dispatch({ type:"SET_GAMES", games }))
    }
}


export const addGame = (game, history) => {
    return dispatch => {
        fetch("http://localhost:3001/games", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify( game )
      })
        .then(resp => resp.json())
        .then(game => {
          dispatch({ type: "ADD_GAME", game })
          history.push("/scoreboard")
        })
    }
  }

export const addUser = (user) => {
  return dispatch => {
    fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(resp => resp.json())
    .then(userData => {
      dispatch( currentUser(userData))
    })
  }
}
