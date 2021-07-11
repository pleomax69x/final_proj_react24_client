import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import SprintChart from '../Sprints/SprintChart/SprintChart';
import s from './ChartModal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default function ChartModal({
  onClose,
  tasks,
  sprintDuration,
  sprintTitle,
}) {
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
        <div>
          <canvas id="BurndownChart" className={s.canvasStyle}></canvas>
        </div>
        <button className={s.modal_close_btn} onClick={handleClose}>
          +
        </button>
        <SprintChart
          tasks={tasks}
          sprintDuration={sprintDuration}
          sprintTitle={sprintTitle}
        />
      </div>
    </div>,
    modalRoot,
  );
}
