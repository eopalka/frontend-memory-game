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
        default:
            return state;
    }
}

export default gamesReducer;
