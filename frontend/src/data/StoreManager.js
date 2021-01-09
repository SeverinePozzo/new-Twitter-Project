import store from "./Store";
import { ADD_TWEET } from "./Actions";

function StoreManager(type, tweet){
    switch(type){
        case ADD_TWEET:
            store.dispatch({
                type: ADD_TWEET,
                payload: {
                    tweet: tweet
                }
            });
        default:
            return;
    }
}

export default StoreManager;