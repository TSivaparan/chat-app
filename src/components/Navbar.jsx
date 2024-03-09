import React from "react"



const Navbar = () => {
    return(
           <div className="navbar">
            <span className="logo">chat App</span>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJhqsfGX8mVYNBUtv8SLJ78RU9UMonP9U_g&usqp=CAU#" alt="" />
                <span>John</span>
                <button>Logout</button>
            </div>
           </div>
        
    )
}

export default Navbar