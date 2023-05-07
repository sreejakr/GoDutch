import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import goDutchLogo from "../assets/icons/goDutchLogo.png"



const SignUpPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event){
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/register',{
        method: 'POST',   
        headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data)
    }

    return (
        <div className="page">
            <div className="cover">
                <img src={goDutchLogo} className="logo-img" width="80%" />
                <form className="form-edit" action="/home" onSubmit={registerUser}>
                    <input className="register-input"
                        type="text" 
                        name="first_name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder='NAME'
                        required />
                    <input className="register-input"
                        type="email" 
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='EMAIL'
                        required />
                    <input className="register-input"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder='PASSWORD'
                        required />

                    <button className="register-btn" id="sub_btn" type="submit">
                        <label className="register-txt">
                            REGISTER
                        </label>
                    </button>
                </form>
                <div>
                    <Link to="/">
                        <label className="already-link">
                            Already have an account?
                        </label></Link>
                </div>
            </div>
        </div>
    )

}

export default SignUpPage;