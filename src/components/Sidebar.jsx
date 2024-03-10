import React from "react"
import Navbar from "./Navbar"
import Search from "./Search"


const Sidebar = () => {
    return(
           <div className="sidebar">
            <Navbar/>
            <Search/>
            <chats/>
           </div>
        
    )
}

export default Sidebar