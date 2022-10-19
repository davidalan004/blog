//import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './login.css'

import { useTranslation } from 'react-i18next';

export default function Login() {

  const { t } = useTranslation(["login", "register"]); //declara para traducir el texto
  
  return (
    <div className='login'>
        <span className="loginTitle">{t("login")}</span>
        <form className="loginForm">
            <label>{t("email")}</label>
            <input 
              type="text" 
              className='loginInput' 
              placeholder={t("enteryouremail")} />
            <label>{t("password")}</label>
            <input 
              type="password" 
              className='loginInput' 
              placeholder={t("enteryourpassword")} />
            <button className="loginButton">{t("login")}</button>
        </form>
            <button className="loginRegisterButton">
              <Link className='link' to="/register">{t("register:register")}</Link>
            </button>
    </div>
  )
}
