import React,{ useRef, useState } from "react";

import './Login.css';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

//==== Dependencies ====
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login(){
    
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { t } = useTranslation();

    async function handleLogin(e) {
        console.log(error)
        e.preventDefault()

        try {
          setError("login successfull")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          navigate('/')
        } catch {
          setLoading(false)
          setError("Failed to log in")
        }
    }

    return(
        <div className="loginContainer">
            <form className="loginForm" onSubmit={handleLogin}>
                <h2>{t('Login')}</h2>
                <div>{error}</div>
                <input placeholder="Email" ref={emailRef} name="Email" type='Email' required />
                <input placeholder={t('Password')} ref={passwordRef} name="Password" type='Password' required/>
                <button className="loginSubmit" type="submit" disabled={loading}>{t('Login')}</button>   
            </form>     
            <div className="redirectReset"><Link to='/forgot-password'>{t('ForgotPass')}</Link></div>
            <div className="redirectSignup">{t('NeedAccount')} <Link to='/signup'>{t('Register')}</Link></div>
        </div>
    )
}