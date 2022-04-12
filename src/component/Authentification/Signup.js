import React, {useRef, useState} from "react";
import './Signup.css';
import { useAuth } from "../../contexts/AuthContext";

// ==== Dependencies ====
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Signup(){
    
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    async function handleSubmit(e){
        
        e.preventDefault()
        
        if (passwordRef.current.value !==
             passwordConfirmRef.current.value){
            return setError("Passwords don't match")
        }

        try {
            setError("");
            setLoading(true);
            signup(emailRef.current.value, passwordRef.current.value);
        }catch{
            
            setError("Failed to create an account");
        }
        setLoading(false);
    }

    return(

        <div className="signupContainer">
            
            <div>
                <form className="signupForm" onSubmit={handleSubmit}>
                    <h2>{t('Register')}</h2>
                    <div>{error}</div>
                    <input placeholder={t('FirstName')}  name='FirstName' type='FirstName' required />
                    <input placeholder={t('LastName')} name="LastName" type='LastName' required  />
                    <input placeholder="Email" ref={emailRef} name="Email" type='Email' required />
                    <input placeholder={t('Password')} ref={passwordRef} name='Password' type='Password' required />
                    <input placeholder={t('PasswordConfirm')} ref={passwordConfirmRef} name='Password' type='Password' required  />
                    <button className="signupSubmit" type="submit" disabled={loading}>{t('Register')}</button>
                </form>
                <div className='redirectLogin'>{t('AlreadyAcc')}<Link to='/login'>{t('Login')}</Link></div>
            </div>
        </div>
    )
}