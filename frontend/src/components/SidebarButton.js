import React from 'react'

function checkHome(value) {
    return (value == "Home");
}

function SidebarButton(props) {
    return (
        <div>
            <button className={checkHome(props.text) ? "flex mt-6 text-3xl hover:bg-blue-100 w-full py-1 rounded-full px-4 font-bold items-center text-blue-500" : "flex mt-6 text-3xl hover:bg-blue-100 w-full py-1 rounded-full px-4 font-bold items-center text-grey-900"}>
                {props.svg}
                {props.text}
            </button>
        </div>
    );
}

export default SidebarButton;
