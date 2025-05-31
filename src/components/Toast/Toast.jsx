import React, { useEffect } from 'react';
import  styles from'./Toast.module.css';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${type}`}>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
