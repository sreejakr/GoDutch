import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import goDutchLogo from "../assets/icons/goDutchLogo.png"
import { useNavigate } from "react-router-dom";
import Receipt from "../assets/icons/Receipt.png"


const SignUpPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    async function registerUser(event){
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/register',{
            headers:{
            'Content-Type':'application/json'
          },
            method: 'POST',   
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
			navigate('/')
		}
    }

    return (
        <div className="page">
            <img src={Receipt} className="main-img" width="40%" />
            <div className="cover">
                <img src={goDutchLogo} className="logo-img" width="80%" />
                <form className="form-edit" action="/home" onSubmit={registerUser}>
                    <input className="text-input"
                        type="text" 
                        name="first_name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder='NAME'
                        required />
                    <input className="text-input"
                        type="email" 
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='EMAIL'
                        required />
                    <input className="text-input"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder='PASSWORD'
                        required />

                    <button className="submit-btn" id="sub_btn" type="submit">
                        <label className="submit-txt">
                            REGISTER
                        </label>
                    </button>
                </form>
                <div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <label className="already-link">
                            Already have an account?
                        </label></Link>
                </div>
            </div>
        </div>
    )

}

export default SignUpPage;