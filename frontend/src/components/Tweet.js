import React from 'react';

function Tweet(props) {

    return (
        <>
            <div className="mt-4 mr-4 mb-4 bg-white p-6 flex items-start">
                <img className="rounded-full mr-3" src="https://avatars0.githubusercontent.com/u/73192867?s=60&v=4" alt="Saleem Hadad profile picture"/>
            <div>
                <div>
                    <a href="#" className="text-black font-bold text-xl">
                        <span className="hover:underline">Ahmed Mohamed</span>
                        <span className="text-gray-500 font-base">@Ahmed_D_Goat_420</span>
                    </a>
                </div>
                <div className="overflow-y-auto">
                    <p className="text-xl py-2">{props.text}</p>
                </div>
                <div className="flex justify-between mt-6">
                    <div className="flex items-center text-gray-400 hover:text-primary cursor-pointer">
                        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        <p className="text-xl ml-2">0</p>
                    </div>
                    <div className="flex  items-center text-gray-400 hover:text-green-500 cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                        <p className=" text-xl ml-2">0</p>
                    </div>
                    <div className="flex  items-center text-gray-400 hover:text-red-500 cursor-pointer">
                        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        <p className=" text-xl ml-2">0</p>
                    </div>
                    <div>
                        <button onClick={() => {
                            props.delete({
                                tweet: props.text,
                                id: props.id
                            });
                        }} className="flex hover:bg-blue-100 w-full py-1 rounded-full px-4 font-bold items-center text-blue-500">
                            <img width="35" height="35" src="https://www.flaticon.com/svg/static/icons/svg/875/875549.svg" alt="Delete" title="Delete" class="loaded"/>
                        </button>
                    </div>
                    <div className="flex  items-center text-gray-400 hover:text-red-500 cursor-pointer">
                        <svg className="w-8 h-8 text-gray-400 hover:text-primary cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Tweet;
