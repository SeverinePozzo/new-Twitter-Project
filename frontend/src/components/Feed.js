import React from 'react';
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet"
import axios from "axios";

function Feed(props) {
    function deleteFromDatabase(value) {
        console.log(value);
        
    }
    const allTweets = props.Tweets.map(elem => {
        if(elem == null || elem.tweet == ""){
            return null;
        }
        return <Tweet delete={deleteFromDatabase} text={elem.tweet} id={elem.id}/>
    });
    return (
            <>
                <div className="bg-gray-100 border w-full lg:w-1/2">
                        <h1 className="bg-white p-6 font-bold text-2xl border-b">Home</h1>
                        <CreateTweet Tweets={props.Tweets} setTweets={props.setTweets}/>
                        <div className="overflow-y-auto">
                            {allTweets}
                        </div>
                    </div>
            </>
    );
}

export default Feed;