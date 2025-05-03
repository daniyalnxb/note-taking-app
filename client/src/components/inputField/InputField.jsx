import React, { useState } from 'react';

import './inputField.style.scss';

import InfoIcon from '@/assets/icons/info-circle.svg';
import ShowIcon from '@/assets/icons/show.svg';
import HideIcon from '@/assets/icons/hide.svg';

const InputField = ({ name="abc", placeholder="", hint="", type="text", label="Change Label" }) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => setInputType((prev) => prev === 'password' ? 'text' : 'password');

  return (
    <div className="input-field">
        <label className="label text-preset-4" htmlFor={name}>{label}</label>
        <div className="input-container">
          <input type={inputType} className="input text-preset-5" id={name} name={name} placeholder={placeholder} />
          {type === 'password' &&
            <>
              {inputType === 'password' ? 
                <ShowIcon onClick={togglePasswordVisibility} className="show-hide-icon" /> :
                <HideIcon onClick={togglePasswordVisibility} className="show-hide-icon" />
              }
            </>
          }
        </div>
        {hint &&
          <div className="hint-container">
            <InfoIcon />
            <p className="message text-preset-5">{hint}</p>
          </div>
        }
    </div>
  );
};

export default InputField;
