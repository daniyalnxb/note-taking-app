import React from 'react';

import './custom-toast.style.scss';

import CrossIcon from '@/assets/icons/close-remove.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';

const CustomToast = ( { closeToast, link="", message }) => {
      return (
        <div className="custom-toast">
          <div className="message-container">
            <CheckCircleIcon className="check-icon" />
            <p className="message">{message}</p>
          </div>
          {link &&
            <div className="link">
              <a>{link}</a>
            </div>
          }
          <CrossIcon className="close-icon" />
        </div>
      );
};

export default CustomToast;
