import React from "react";
import addAvatar from "../img/addAvatar.png"

const Login = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">chat App</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Enter password"/>
                    <button>Sign in</button>
                </form>
                <p> you don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login