import React from 'react';
import style from './FloatingButton.module.css';

const FloatingButton = ({ onClick }) => {
  return (
    <button className={`${style['floating-button']}`} onClick={onClick}>
      <img src="/note-icon.svg" alt="note icon" />
    </button>
  );
};

export default FloatingButton;
