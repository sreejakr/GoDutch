import React, { useState } from "react";
// import { GoogleLogin } from '@react-oauth/google';
import goDutchLogo from "../assets/icons/goDutchLogo.png"
import google from "../assets/icons/google.png"
import "./styles/Login.css"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import Receipt from "../assets/icons/Receipt.png"
<GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>;

window.isLoggedIn = false;
const Login = () => {
    const [popupStyle, showPopup] = useState("hide")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    async function loginUser(event) {
        event.preventDefault();

        const response = await fetch('http://localhost:1337/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data)

        if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/bills'
		} else {
			alert('Please check your username and password')
		}

    }

    const registerUser = () => {
        navigate("/register")
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className="page">
            <img src={Receipt} className="main-img" width="40%" />
            <div className="cover">
                <img src={goDutchLogo} className="logo-img" width="60%" />
                <form className="form-edit" onSubmit={loginUser}>
                    <input className="text-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="EMAIL ID" />

                    <input className="text-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="PASSWORD" />

                    <button type="submit" className="submit-btn">
                       <label className="submit-txt">
                            LOGIN
                        </label>
                    </button>
                    
                    <button type="button" className="alt-login" onClick={registerUser}>
                        <label className="continue-google-txt"> REGISTER </label>
                    </button>
                    <button type="button" className="alt-login">
                        <img src={google} height="24" />
                        <label className="continue-google-txt"> CONTINUE WITH GOOGLE </label></button>
            </form>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>

        </div>
    )
}
export default Login;