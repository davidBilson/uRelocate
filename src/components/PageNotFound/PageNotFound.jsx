import { useEffect } from 'react'
import LottieAnimation from './LottieAnimation'
import './PageNotFound.css'

const PageNotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  },[]);
  return (
    <section className='page-not-found'>
        <div className="page-container">
            <LottieAnimation />
            <h3>Oops!! Seems like we lost our way</h3>
            <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
            <button className='page-back-btn'>Go Back</button>
        </div>
    </section>
  )
}

export default PageNotFound