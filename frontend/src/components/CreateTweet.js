import React from 'react';
import StoreManager from "../data/StoreManager";
import axios from "axios";
import store from "../data/Store";
import { useState } from "react"

function check(value){
    return (value == "" || value.length > 255);
}


function CreateTweet(props) {
    const [Value, setValue] = useState("");
    let hiddenClass = "cursor-not-allowed";

    function add_Tweet(){
        if(Value == ""){
            alert("Cant post an empty tweet!");
            return;
        }
        else if(Value.length > 255){
            alert("Tweet Exceeded the character limit! (255 characters)");
            return;
        }
        document.getElementById("tweet").value = "";
        axios.post("http://localhost:3000/tweet", {Value}).then(response => {
            console.log(response.data);
        });
        StoreManager("ADD_TWEET", Value);
        props.setTweets(store.getState());
        setValue("");
    }

    return (
        <>
            <div className="bg-white p-6 flex items-start">
            <img className="rounded-full mr-4" src="https://avatars0.githubusercontent.com/u/73192867?s=60&v=4" alt=""/>
            <div className="flex-grow">
                <textarea id="tweet" onChange={(event) => {
                    setValue(event.target.value);
                }} className="text-xl p-2 w-full resize-none h-36" placeholder="What's happening?"></textarea>
                <hr/>
                <div className="flex justify-between text-primary mt-4 items-center">
                    <div className="flex">
                        <svg className="w-10 h-10 p-1 rounded-full hover:bg-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        <svg className="w-10 h-10 p-1 rounded-full hover:bg-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <svg className="w-10 h-10 p-1 rounded-full hover:bg-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        <svg className="w-10 h-10 p-1 rounded-full hover:bg-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <svg className="w-10 h-10 p-1 rounded-full hover:bg-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>

                    <button onClick={add_Tweet} className={check(Value) ? "bg-blue-500 text-white rounded-full px-6 py-2 text-xl " + hiddenClass : "bg-blue-500 text-white rounded-full px-6 py-2 text-xl "}>Tweet</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateTweet;
