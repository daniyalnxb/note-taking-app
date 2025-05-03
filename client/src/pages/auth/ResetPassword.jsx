import React, { useContext } from 'react';

import './auth.styles.scss';

import { ThemeContext } from '@/context/ThemeProvider';
import Logo from '@/assets/logo.svg';
import LogoDark from '@/assets/logo-dark.svg';
import InputField from '@/components/inputField/InputField';
import Button from '@/components/button/Button';

const ResetPassword = () => {
    const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

    return (
        <div className="auth">
            <div className="auth-form-container">
                {darkTheme ? <LogoDark className="logo" /> : <Logo className="logo" />}
                <h1 className="heading text-preset-1">Rest Your password</h1>
                <h2 className="sub-heading text-preset-5">Choose a new password to secure you account.</h2>

                <div className="form-container">
                    <InputField name="password" type="password" label="New Password" hint="At least 8 characters" />
                    <InputField name="password" type="password" label="Confirm New Password" />
                    <Button onClick={toggleDarkTheme} type="primary" style={{width: '100%'}}>Reset Password</Button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
