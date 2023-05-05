import styles from './Eligibility.module.css'
import { useState } from 'react'

export const EligibleFormPassword = () => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters long with at least, a letter and a number')
        } else {
            setPasswordError('');
        }
    };

    const handlePasswordChange = (event) => {
        const {value} = event.target;
        setPassword(value);
        validatePassword(value);
    }

  return (
    <>
        <label className={styles.label} htmlFor="password">Password</label>
        <input 
        autoComplete='off'
        className={styles.inputArea} 
        type="password" 
        name='_password' 
        id='password' 
        placeholder='Enter your password'
        value={password}
        onChange={handlePasswordChange} 
        required />
        {passwordError && <div className={passwordError ? styles.formRegex : styles.checkedRegex}>{passwordError}</div>}
    </>
  )
}
