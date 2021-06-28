import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <div className={s.modal_backdrop} onClick={handleBackdropClick}>
      <div className={s.modal_content}>
        <button className={s.modal_close_btn} onClick={handleClose}>
          +
        </button>
        {children}
        <div className={s.modal_btn_wrapper}>
          <button className={s.modal_btn_done}>Ready</button>
          <button className={s.modal_btn_exit} onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
