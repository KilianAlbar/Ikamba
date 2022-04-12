import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import './ResetPassword.css';

// ==== Dependencies ==== 
import { useTranslation } from "react-i18next";

export default function ResetPassword(){
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation();

    async function handleReset(e){
        e.preventDefault()

        try{
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        }catch{
            setError("Failed to reset password")
        }
        setLoading(false)
    }

    return(
        <form className="resetPassword" onSubmit={handleReset}>
            {error}
            <h2>{t('ForgotPass')}</h2>
            <input type='Email' disabled={loading} placeholder={t('EnterEmail')} ref={emailRef} required/>
            {message}
            <button className="resetBtn" type="submit">{t('ResetPass')}</button>
        </form>
    )
}