import React from "react";
import addAvatar from "../img/addAvatar.png"

const Register = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">chat App</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder="Display name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Enter password"/>
                    <input style={{display:"none"}}type="file" />
                    <label htmlFor="file">
                        <img src={addAvatar} alt="" />
                        <span>add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>you have an account? Login</p>

            </div>
        </div>
    )
}

export default Register