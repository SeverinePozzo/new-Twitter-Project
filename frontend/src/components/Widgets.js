import React from 'react';
import store from "../data/Store";
import axios from "axios";

function filter(Tweets, criteria){
    let returned =  Tweets.map(elem => {
        if(elem.tweet.includes(criteria)){
            return elem;
        }
        else{
            return null;
        }
    });
    let new_returned = [];
    for(var i = 0; i<returned.length; i++){
        if(returned[i] === null || returned[i].tweet === ""){
            continue;
        }
        new_returned.push(returned[i]);
    }
    return new_returned;
}

function Widgets(props) {
    function getFromDatabase(){
        let all_tweets = [];
        axios.get("http://localhost:3000/tweets")
        .then(response => {
            all_tweets = response.data.tweets;
            console.log(all_tweets);
            props.update(all_tweets);
        });
    }
    return (
        <>
            <div className="w-full lg:w-1/4 p-6">
                <div className="relative">
                    <input onChange={(event) => {
                        if(event.target.value === ""){
                            getFromDatabase();
                        }
                        const temp = filter(store.getState(), event.target.value);
                        console.log(temp);
                        props.update(temp);
                    }} type="text" className="bg-gray-100 border rounded-full focus:outline-none focus:bg-white py-4 px-4 pl-12 w-full" placeholder="Search Twitter"/>
                    <svg className="absolute inset-y-1/2 -mt-3 ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>

            <div className="mt-6 bg-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-center pt-2 pb-4">
                    <h2 className="text-2xl font-bold">Trends for you</h2>
                    <button>
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </button>
                </div>

                <div className="py-4 border-t">
                    <p className="text-gray-500">Trending in UAE</p>
                    <p className="text-black font-bold text-xl">#TailwindCSS</p>
                    <p className="text-gray-500">54.6k Tweets</p>
                </div>

                <div className="py-4 border-t">
                    <p className="text-gray-500">Trending in UAE</p>
                    <p className="text-black font-bold text-xl">#crypto</p>
                    <p className="text-gray-500">5.6k Tweets</p>
                </div>

                <div className="py-4 border-t">
                    <p className="text-gray-500">Trending in UAE</p>
                    <p className="text-black font-bold text-xl">#HTML</p>
                    <p className="text-gray-500">4.6k Tweets</p>
                </div>

                <div className="pt-4 pb-2 border-t">
                    <a className="text-blue-500 text-xl" href="#">Show more</a>
                </div>
            </div>
        </div>
    </>
    );
}

export default Widgets;
