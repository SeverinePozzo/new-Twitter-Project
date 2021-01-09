import React from 'react';
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";  
import { SetTweets } from "../data/SetTweets";


function Main(props) {
    const [initial, setInitial] = useState(false);
    function getFromDatabase(){
        let all_tweets = [];
        axios.get("http://localhost:3000/tweets")
        .then(response => {
            all_tweets = response.data.tweets;
            console.log(all_tweets);
            props.SetTweets(all_tweets);
        });
    }

    useEffect(() => {
        if(initial == false){
            setInitial(true);
            return getFromDatabase();
        }
    });

   
    return (
        <div className="mx-auto flex flex-wrap">
            <Sidebar Tweets={props.tweets} setTweets={props.SetTweets}/>
            <Feed Tweets={props.tweets} setTweets={props.SetTweets}/>
            <Widgets Tweets={props.tweets} update={props.SetTweets}/>
        </div>
    );
}
const mapStateToProps = (tweets) => {
    return {
        tweets
    };
}
const mapDispatchToProps = { SetTweets };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
