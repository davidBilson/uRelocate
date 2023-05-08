import { useParams } from 'react-router-dom';
import BlogContentData from './BlogContentData';
import '../../styles/Blog.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export const BlogContentStructure = () => {
  const { id } = useParams();
  const blogContentData = BlogContentData.find((item) => item.id === parseInt(id));

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <article className={'blog-container'}>
        <h1 className={'blog-heading'}>{blogContentData.heading}</h1>
        <h2 className={'blog-subheading'}>{blogContentData.subHeading}</h2>
        <img className={'blog-image'} src={blogContentData.firstImage} alt={blogContentData.firstImageAlt} />
        <p>{blogContentData.firstParagraph}</p>
        <p>{blogContentData.secondParagraph}</p>
        <img className={'blog-image'} src={blogContentData.secondImage} alt={blogContentData.secondImageAlt} />
        <p>{blogContentData.thirdParagraph}</p>
        <p>{blogContentData.fourthParagraph}</p>
        <p>{blogContentData.lastParagraph}</p>
    </article>
  )
}
