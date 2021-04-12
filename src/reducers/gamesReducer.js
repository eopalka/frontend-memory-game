const initialState = {
    games: [],
    user: null,
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
        case "CREATE_USER":
            return {
                ...state,
                user: action.payload
            }
        case "UPDATE_GAMES_PLAYED":
            return {
                ...state,
                user: {...state.user, games_played: action.payload + 1}
            }
        default:
            return state;
    }
}

export default gamesReducer;
