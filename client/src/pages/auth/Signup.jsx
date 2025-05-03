import React, { useContext } from 'react';

import './auth.styles.scss';

import { ThemeContext } from '@/context/ThemeProvider';
import Logo from '@/assets/logo.svg';
import LogoDark from '@/assets/logo-dark.svg';
import InputField from '@/components/inputField/InputField';
import Button from '@/components/button/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <div className="auth">
        <div className="auth-form-container">
            {darkTheme ? <LogoDark className="logo" /> : <Logo className="logo" />}
            <h1 className="heading">Create Your Account</h1>
            <h2 className="sub-heading">Sign up to start organizing your notes and boost your productivity.</h2>

            <div className="form-container">
                <InputField name="email" placeholder="email@example.com" label="Email Address" />
                <InputField name="password" type="password" label="Password" hint="At least 8 characters" />
                <Button onClick={toggleDarkTheme} type="primary" style={{width: '100%'}}>Sign up</Button>
                <div className="seperator"></div>
            </div>
            <div className="login-with-google">
                <p>or log in with:</p>
                <Button type="secondary" icon="google" style={{width: '100%'}}>Google</Button>
                <div className="seperator"></div>
                <p>Already have and account? <span><Link to="/login">Login</Link></span></p>
            </div>
        </div>
    </div>
  );
};

export default SignUp;
