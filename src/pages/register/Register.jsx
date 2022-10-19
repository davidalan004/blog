import { t } from "i18next";
import { Link } from "react-router-dom";
import './register.css'

import { useTranslation } from 'react-i18next';

export default function Register() {

  const { t } = useTranslation(["register", "login"]); //declara para traducir el texto

  return (
    <div className='register'>
        <span className="registerTitle">{t("register")}</span>
        <form className="registerForm">
            <label>{t("username")}</label>
            <input 
              type="text" 
              className='registerInput' 
              placeholder={t('enteryourusername')} />
            <label>{t("email")}</label>
            <input 
              type="text" 
              className='registerInput' 
              placeholder={t("login:enteryouremail")} />
            <label>{t("password")}</label>
            <input 
              type="password" 
              className='registerInput' 
              placeholder={t("login:enteryourpassword")} />
            <button className="registerButton">{t("register")}</button>
        </form>
          <button className="registerLoginButton">
            <Link className='link' to="/login">{t("login:login")}</Link>
          </button>
    </div>
  )
}
