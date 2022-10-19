import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './post.css';

export default function Post() {
    const {t} = useTranslation(["post"]);
  return (
    <div className='post'>
        <img 
        className='postImg'
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">{t('music')}</span>
                <span className="postCat">{t('life')}</span>
            </div>
            <span className="postTitle">
                <Link className="link" to="/post/abc" >
                {t('titlepost')}
                </Link>
            </span>
            <hr />
            <span className="postDate">{t('postdate')}</span>
        </div>
        <p className='postDesc'>
            {t('posttext')}
        </p>
    </div>
  );
}
