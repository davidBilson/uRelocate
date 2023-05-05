import styles from './Eligibility.module.css'
import { EligibleFormPassword } from './EligibleFormPassword';
import { useState } from 'react';

export const EligibleForm = () => {
    const formTextTwo = {color: "grey"};
    const [formKey, setFormKey] = useState(Math.random());
    function handleSubmit(event) {
      event.preventDefault();
      // handle form submission
      setFormKey(Math.random());
    }
  return (
    <div className={styles.containerOneChild}>
            <form action="" autoComplete='new-password' key={formKey} onSubmit={handleSubmit}>
              <p className={styles.formTextOne}>Welcome to the Roots</p>
              <p style={formTextTwo}>Welcome, please enter your details to get started</p>
              <label className={styles.label} htmlFor="name">Full name</label>
              <input className={styles.inputArea} type="text" name='_full_name' id='name' placeholder='Enter your full name' required/>
              <label className={styles.label} htmlFor="email">Email</label>
              <input className={styles.inputArea} type="email" name='_email' id='email' placeholder='Enter your email' required />
              <label className={styles.label} htmlFor="country">Country</label>
              <input className={styles.inputArea} type="country" name='_country' id='country' placeholder='Enter your current country of residence' required />
              {/* <EligibleFormPassword /> */}
              <label htmlFor="terms" className={styles.terms}>
              <input className={styles.checkbox} type="checkbox" name="_terms"  id="terms" required /> &nbsp; I agree to <a href="" className={styles.link}>terms and conditions</a>
              </label>
              <input className={styles.submit} type="submit" value='Get Started' />
            </form>
            <p>Do you already have an account? <a href="" className={styles.link}>Sign in</a></p>
    </div>
  )
}
