import { Link } from "react-router-dom";
import "./topbar.css";

import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import i18next from "i18next";


export default function TopBar() {
    const user = false;

    const {i18n, t} = useTranslation(["topbar"]);
    useEffect(() => {
      if(localStorage.getItem("i18nextLng")?.length > 2){
        i18next.changeLanguage("en");
      }
    }, []);
    
    const handleLanguageChange = (e) => {
      i18n.changeLanguage(e.target.value);
    }
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                      <Link className='link' to="/">
                        {t("home")}                        
                      </Link>
                    </li>
                    <li className="topListItem">{t("about")}</li>
                    <li className="topListItem">{t("contact")}</li>
                    <li className="topListItem">
                      <Link className='link' to="/write">
                        {t("write")}
                      </Link>
                    </li>
                    {user && <li className="topListItem">{t("logout")}</li>}
                    
                  <li className="nav-item">
					        	<select
					        		className="nav-link bg-dark border-0 ml-1 mr-2"
					        		value={localStorage.getItem("i18nextLng")}
					        		onChange={handleLanguageChange}
					        	   >
					        		<option value="en">English</option>
					        		<option value="es">Español</option>
					        	</select>
					        </li>
                </ul>
            </div>
            <div className="topRight">
                { user ? (
                  <Link className="link" to="/settings">
                  <img 
                  className="topImg"
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                  alt="" 
                  />
                  </Link>
                ) :(
                  <ul className='topList'>
                    <li className="topListItem">
                      <Link className='link' to="/login">
                      {t("login")}
                      </Link>
                    </li>
                    <li className="topListItem">
                      <Link className='link' to="/register">
                      {t("register")}
                      </Link>
                    </li>
                  </ul>
                 )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
     )
}