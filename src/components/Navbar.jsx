import React from "react"
import {signOut} from "firebase/auth"
import { auth } from "../firebase"



const Navbar = () => {
    return(
           <div className="navbar">
            <span className="logo">chat App</span>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJhqsfGX8mVYNBUtv8SLJ78RU9UMonP9U_g&usqp=CAU#" alt="" />
                <span>John</span>
                <button onClick={()=>signOut(auth)}>Logout</button>
            </div>
           </div>
        
    )
}

export default Navbar