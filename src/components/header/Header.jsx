import { useTranslation } from 'react-i18next';
import './header.css'



export default function Header() {
  const {t} = useTranslation(["header"]); //funcionse i18n para traducir

  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>{t("react&node")}</span>
        <span className='headerTitleLg'>{t('blog')}</span>
      </div>
      <img 
        className='headerImg' 
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
        alt="" 
      />
    </div>
  );
}
