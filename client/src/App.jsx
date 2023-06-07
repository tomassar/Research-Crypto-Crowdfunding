import React from 'react'
import {Route, Routes} from 'react-router-dom'

import { CampaignDetails, CreateCampaign, Home, Profile } from './pages'
import {Navbar, Leftbar, Rightbar} from './components'

const App = () => {
    return (
        <div className="relative sm:-8 p-4 bg-[#e3e9e2] min-h-screen flex flex-row">
            <div className="sm:flex hidden mr-10 relative"> <Leftbar/></div>
            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
            <div className="sm:flex hidden ml-10 relative"> <Rightbar/></div>
        </div>
    )
}

export default App