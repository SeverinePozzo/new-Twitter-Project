import { ADD_TWEET } from "./Actions";

function Reducer(state = [], action) {
    switch(action.type){
        case ADD_TWEET:
            return [
                {
                    tweet: action.payload.tweet
                },
                ...state
            ];
        case "SET_TWEETS":
            return action.payload;
        default:
            return state;
    }
}

export default Reducer;