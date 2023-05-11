import './About.css'
import { RxExternalLink } from 'react-icons/rx'

const About = () => {
  return (
    <section className="about">
      <section className='about-container'>
        <section className='about-box-model'>
          <div className="about-text-heading">
            <h1>NOT JUST ABOUT CROSSING BORDERS</h1>
            <p>ReloRoots</p>
          </div>
          <div className="about-parent-image">
          </div>
        </section>
        <section className="about-details">
          <div>
            <ul>
              <li><span>Follow Us</span></li>
              <li>Instagram <span><RxExternalLink /></span></li>
              <li>Youtube <span><RxExternalLink /></span></li>
            </ul>
          </div>
          <div>
            <p>Welcome to ReloRoots! We are a resource for people who are relocating to new cities, countries, or regions. We understand that the process of moving can be overwhelming, which is why we aim to provide helpful information and resources to make the transition as smooth as possible.</p>
            <p>Our team of relocation experts and contributors have experience with different types of relocation, from short-term moves to permanent relocation. We're passionate about sharing our knowledge and helping people navigate the challenges of moving to a new place.</p>
          </div>
          <div>
            <p>At ReloRoots, we believe that relocation is not just about finding a new home, but also about adapting to a new culture, building a new community, and embracing new experiences. We strive to provide practical advice and inspiration to help you make the most of your relocation journey.</p>
            <div>
              <p>Exclusively sponsored. Developed by Agile</p>
              <img src="https://pbs.twimg.com/profile_images/1600517764048904194/rDilZKKj_400x400.jpg" alt="" />
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default About