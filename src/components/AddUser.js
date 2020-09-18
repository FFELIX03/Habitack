import React from 'react'
import axios from 'axios'

export default function AddUser(){

    const [name, setName] = React.useState("");

    const handleChange = (e) =>{
        setName(e.target.value);
        console.log(name);
    }

    const DisplayName = () => {
        if(name !== "") {
            return <h1>Name: {name} </h1>
        }
        else{
            return null;
        }
    }

    function handleClear() {
        setName("");
    }

         // To add new employee when user submits the form
    const handleSub = (event) => {
        event.preventDefault();
        const  {firstName}  = {name};
        console.log(firstName);
        axios.post('http://localhost:4000/people/addPerson', {
            firstName: name,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    return (
        <div style={{display : "flex", alignItems: "center", flexDirection: "column"}}>
        <form onSubmit = {handleSub}>
            <label>Name:
                <input type = "text" onChange = {handleChange} />
            </label>
            <input type="submit" value="submit" />
            <input type="reset" name ="reset" onClick = {handleClear} />
        </form>
        
        <DisplayName style={{justifyContent: "center"}}/>
        </div>
    )
}