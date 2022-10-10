import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

export default function Login(){
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const [input, setInput] = useState({
        username : "",
        password : ""
    })

    const handleInput = (event) => {

        let value = event.target.value
        let name = event.target.name
        setInput({ ...input, [name] : value })
    }

    const handleLogin = (event) => {
        event.preventDefault()
        let {username, password} = input
        axios.post(`https://fakestoreapi.com/auth/login`, {username, password})
        .then((res)=>{
            let {token} = res.data
            localStorage.setItem("token", token)
            navigate(from, { replace: true})
        })
        .catch((error) => {
            // console.log(error)
            alert(error.message)
        })
        
    }

    return (
        <div>
            <h1>Login Page</h1>
            <p>Klik the button to login</p>
            <form onSubmit={handleLogin}>
                <label>username</label><br/>
                <input value={input.username} onChange={handleInput} type={'text'} name="username" /><br/>
                <label>Password</label><br/>
                <input value={input.password} onChange={handleInput} type={'password'} name="password" /><br/><br/>
           
                <input type={'submit'} />
           </form>
            {/* <button 
                className="login-button"
                onClick={()=>handleLogin()}>
                Login
            </button> */}
        </div>
    )
}