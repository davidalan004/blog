import './sidebar.css'

import { useTranslation } from 'react-i18next';

export default function Sidebar() {

  const { t } = useTranslation(["sidebar"]); //declara para traducir el texto
  
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">{t("aboutme")}</span>
            <img 
            className='sidebarImg'
            src="https://images.unsplash.com/photo-1661264265504-86515673af19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
            alt="" 
            />
            <p>
              {t("aboutmetext")}               
            </p>
        </div>
        <div className="sidebarItem">
        <span className='sidebarTitle'>{t("categories")}</span>
          <ul className="sidebarList">
              <li className="sidebarListItem">{t("life")}</li>
              <li className="sidebarListItem">{t("music")}</li>
              <li className="sidebarListItem">{t("style")}</li>
              <li className="sidebarListItem">{t("sport")}</li>
              <li className="sidebarListItem">{t("tech")}</li>
              <li className="sidebarListItem">{t("cinema")}</li>
          </ul>  
        </div>
        <div className="sidebarItem">
          <span className='sidebarTitle'>{t("followus")}</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          </div>
        </div>
    </div>
  )
}
