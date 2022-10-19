import { useTranslation } from 'react-i18next'
import './singlePost.css'

export default function SinglePost() {
  const {t} = useTranslation(["singlepost", "post"]);
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img 
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt="" 
        className='singlePostImg'
        />
        <h1 className="singlePostTitle">
          {t('post:titlepost')}
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            {t('author')}: <b>David Alan Alonzo</b>
          </span>
          <span className="singlePostDate">{t('post:postdate')}</span>
        </div>
        <p className='singlePostDesc'>
          {t('singlepost')}
        </p>
      </div>
    </div>
  )
}
