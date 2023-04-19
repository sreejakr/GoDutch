import React, { useState } from "react";
// import { GoogleLogin } from '@react-oauth/google';
import goDutchLogo from "../assets/icons/goDutchLogo.png"
import Calculator from "../assets/icons/Calculator.svg"
import google from "../assets/icons/google.png"
import "./styles/Login.css"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Navigate, useNavigate } from "react-router-dom";
<GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>;

window.isLoggedIn = false;
const Login = () => {
    const [popupStyle, showPopup] = useState("hide")
    const navigate = useNavigate();
    const popup = () => {
        showPopup("login-popup")
        navigate("/bills")
        setTimeout(() => showPopup("hide"), 3000)
        window.isLoggedIn = true;
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className="page">
            {/* <img src={Calculator} className="logo-img" width="30%" /> */}

            <div className="cover">
                {/* <h1>LOGIN</h1> */}
                <img src={goDutchLogo} className="logo-img" width="60%" />

                <input type="text" placeholder="EMAIL ID" />
                <input type="password" placeholder="PASSWORD" />

                <div className="login-btn" onClick={popup}>
                    <label className="login-txt"> LOGIN </label>
                </div>
                <hr className="seperator" />

                <div className="alt-login" onClick={popup}>
                    <img src={google} height="25" />
                    <label className="continue-google-txt">CONTINUE WITH GOOGLE </label>
                </div>
                {/* <GoogleLogin className="blue"
                        //    clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        isSignedIn={false}
                        icon={false}
                        theme="dark"  // alternative is light, which is white
                    /> */}
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>

        </div>
    )
}
export default Login;