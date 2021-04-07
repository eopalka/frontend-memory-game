const initialState = {
    games: [],
    loading: true
}

const gamesReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_GAMES":
            return {
                ...state,
                loading: false,
                games: action.games
            }
        case "ADD_GAME":
            return {
                ...state,
                games: [...state.games, action.game]
      }
        default:
            return state;
    }
}

export default gamesReducer;
