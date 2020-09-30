import React, {useState} from 'react'
import axios from 'axios'

export default function Signup() {
    const [passOne, setpOne] = useState("");
    const [passTwo, setpTwo] = useState("");
    const [email, setEmail] = useState("");
    const [passVal, setVal] = useState("");
    const [emailVal, setEVal] = useState("");
    
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "30px",
        textAlign: "center",
        fontFamily: "Segoe UI",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left:'0'
    };

    const handleChange = (e) =>{
        if(e.target.name === "psw"){
            setpOne(e.target.value.toString());
        }
        else if(e.target.name === "psw-repeat") {
            setpTwo(e.target.value.toString());
        }
        else if(e.target.name === "email") {
            setEmail(e.target.value.toString());
        }
        
    }

   const validatePass = () =>{
       if(passOne ==="") {
           setVal("Password Cannot Be Empty")
           return false;
       }
       else if(passOne === passTwo){
        setVal("")
        return true;
    }
       else{
           setVal("Passwords Must Match")
           return false;
       }
   }

   const validateEmail = () => {
       var re = /[^@]+@[^@]+/;
       if(email === ""){
           setEVal("Email field must not be empty")
           return false;
       }
       if (!(re.test(email))){
           setEVal("Email is not valid")
           return false;
       }
       if(re.test(email)){
           setEVal("")
           return true;
       }
       
   }

   const handleSubmit = (event) => {
       event.preventDefault();
       validatePass();
       validateEmail();
       
       if(validatePass() && validateEmail() ){
        axios.post('http://localhost:4000/accounts/signup', {
            email: email.toString(),
            password: passOne.toString()}).then(res => console.log(res.data));
       }
    }

       const DisplayWarnings = () => {
           if((emailVal !== "") && (passVal !== "")) {
               return <div><p>{emailVal}</p> <p>{passVal}</p></div>
           }
           else if(emailVal !== "") {
               return <p>{emailVal}</p>
           }
           else if(passVal !== "") {
               return <p>{passVal}</p>
           }
           else return <p></p>
       }
   

    return (
        
        <div style={mystyle}>
            <h1>Habit-tact</h1>

            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account.</p>

            <table align="center" padding="50px">
                <tr>
                    <label for="email"><b>Username</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required onChange = {handleChange}/>
                </tr>
                <tr>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required onChange = {handleChange}/>
                </tr>
                <tr>
                    <label for="psw-repeat"><b>Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="psw-repeat" required onChange = {handleChange}/>
                </tr>
            </table>
            <DisplayWarnings />
            <input type="submit" onClick = {handleSubmit} />
        </div>

    )
}