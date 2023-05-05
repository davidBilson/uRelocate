import '../../styles/Newsletter.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillWarning} from 'react-icons/ai'

const NewsLetter = () => {
    const message = `Email client not available yet!`;
    const notify = () => {
        toast.info(
            message
            ,
            {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000
            }
            );
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };
  return (
    <section className='newsletter-container' id='newsletter'>
        <div>
            <h2>Subscribe To Our Weekly Newsletter</h2>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input className='newsletter-form-input' type="email" placeholder='Enter your email address' />
                <input className='newsletter-form-btn' type="submit" value="Subscribe Now" onClick={notify} />
                <ToastContainer/>
            </form>
        </div>
        <div>
            <p>No spam, notification only about new updates.</p>
        </div>
    </section>
  )
}

export default NewsLetter