import React from 'react'
import Logo from "./logo.png"
//import axios from 'axios'

export default function Signin() {

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "30px",
        textAlign: "center",
        fontFamily: "Segoe UI"
    };

    return (
        <div style={mystyle}>
            <h1>Habit-tact</h1>
            <img src={Logo} alt="Habit-tack Logo"/>
            <p>Enter your account information </p>

            <table align="center">
                <tr>
                    <label>
                        Email
                        <input type="text" name="email" />
                    </label>
                </tr>
                <tr>
                    <label>
                        Password
                        <input type="password" name="psw" required />
                    </label>
                </tr>
            </table>

            <button>Sign In</button>

            <p>Not a member?</p>
            <p><a href={"./Signup"}>Create Account Here</a></p>



        </div>

    )
}

