import React, { useContext } from 'react';

import './auth.styles.scss';

import { ThemeContext } from '@/context/ThemeProvider';
import Logo from '@/assets/logo.svg';
import LogoDark from '@/assets/logo-dark.svg';
import InputField from '@/components/inputField/InputField';
import Button from '@/components/button/Button';

const ForgotPassword = () => {
    const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

    return (
        <div className="auth">
            <div className="auth-form-container">
                {darkTheme ? <LogoDark className="logo" /> : <Logo className="logo" />}
                <h1 className="heading text-preset-1">Forgotten you password?</h1>
                <h2 className="sub-heading text-preset-5">Enter you email below, and we&apos;ll send you a link to reset it.</h2>

                <div className="form-container">
                    <InputField name="email" placeholder="email@example.com" label="Email Address" />
                    <Button onClick={toggleDarkTheme} type="primary" style={{width: '100%'}}>Send Reset Link</Button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
