import React from "react"



const Search = () => {
    return(
           <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user" />
            </div>
            <div className="userChat">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJhqsfGX8mVYNBUtv8SLJ78RU9UMonP9U_g&usqp=CAU#" alt="" />
                <div className="userChatInfo">
                    <span>jane</span>
                </div>
            </div>
           </div>
        
    )
}

export default Search