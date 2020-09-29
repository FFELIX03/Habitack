import React from 'react'
//import axios from 'axios'

export default function Signup() {


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

            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account.</p>

            <table align="center" padding="50px">
                <tr>
                    <label for="email"><b>Username</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                </tr>
                <tr>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </tr>
                <tr>
                    <label for="psw-repeat"><b>Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="psw-repeat" required />
                </tr>
            </table>

            <p>Already registered?</p>
            <p><a href={"./"}>Sign in</a></p>



        </div>

    )
}