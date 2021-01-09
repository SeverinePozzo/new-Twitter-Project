import React from 'react';
import ModalCreateTweet from "./ModalCreateTweet";

function Modal(props) {
    let HiddenClass = props.show == true ? "" : " hidden"
    return (
            <>
                <div id="modal" className={"fixed z-10 inset-0 overflow-y-auto" + HiddenClass}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                <div className="flex justify-end">
                                    <h1>
                                        
                                    </h1>
                                    <button onClick={props.hideModal} className="mr-4 mt-4 ml-4 mb-4 bg-blue-500 text-white rounded-full px-6 py-2 text-xl">
                                        x
                                    </button>
                                </div>
                                <div>
                                    <ModalCreateTweet hideModal={props.hideModal} Tweets={props.Tweets} setTweets={props.setTweets}/>
                                </div>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default Modal;
