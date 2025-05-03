import React from 'react';

import './modal.style.scss';

import DeleteIcon from '@/assets/icons/delete.svg';
import Button from '../button/Button';

const Modal = ({ open, handleClose }) => {
  return (
        <div className={`modal-overlay ${open ? 'open' : ''}`}>
            <div className={`modal`}>
                <div className="modal-body">
                    <div className="icon-container">
                        <DeleteIcon />
                    </div>
                    <div className="heading-conatiner">
                        <p className="title">Delete Note</p>
                        <p className="description">Are you sure you want to permanently delete this note? This action cannot be undone.</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="buttons-container">
                        <Button type="secondary" onClick={handleClose}>Cancel</Button>
                        <Button type="danger">Delete Note</Button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Modal;
