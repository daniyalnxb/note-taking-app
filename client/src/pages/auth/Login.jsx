import React, { useContext } from 'react';

import './auth.styles.scss';

import { ThemeContext } from '@/context/ThemeProvider';
import Logo from '@/assets/logo.svg';
import LogoDark from '@/assets/logo-dark.svg';
import InputField from '@/components/inputField/InputField';
import Button from '@/components/button/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

    return (
        <div className="auth">
            <div className="auth-form-container">
                {darkTheme ? <LogoDark className="logo" /> : <Logo className="logo" />}
                <h1 className="heading text-preset-1">Welcome to Note</h1>
                <h2 className="sub-heading text-preset-5">Please log in to continue</h2>

                <div className="form-container">
                    <InputField name="email" placeholder="email@example.com" label="Email Address" />
                    <InputField name="password" type="password" label="Password" />
                    <Button onClick={toggleDarkTheme} type="primary" style={{width: '100%'}}>Login</Button>
                    <div className="seperator"></div>
                </div>
                <div className="login-with-google">
                    <p className="text-preset-5">or log in with:</p>
                    <Button type="secondary" icon="google" style={{width: '100%'}}>Google</Button>
                    <div className="seperator"></div>
                    <p className="text-preset-5">No account yet? <span><Link to="/sign-up">Sign Up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
