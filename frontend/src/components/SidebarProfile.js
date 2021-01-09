import React from 'react'

function SidebarProfile() {
    return (
        <div className="flex items-center mt-20">
            <img className="rounded-full mr-3" src="https://avatars0.githubusercontent.com/u/73192867?s=60&v=4" alt="Saleem Hadad profile picture"/>
            <div>
                <p className="font-bold text-lg">Ahmed Mohamed</p>
                <p className="text-gray-600">@Ahmed_D_Goat_420</p>
            </div>
        </div>
    );
}

export default SidebarProfile;
