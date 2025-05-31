import React from 'react';
import styles from './UpdateNoteModal.module.css';
import Input from '../input/Input';

const UpdateNoteModal = ({ title, content, setTitle, onChange, onDelete, onSave,onClose }) => {
    console.log("content--->",content)
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div className={styles.body}>
         
          <textarea
            placeholder="Enter content..."
            value={content}
            onChange={onChange}
            rows={13}
          ></textarea>
        </div>
        <div className={styles.footer}>
          <button className={styles.addBtn} onClick={onSave}>Save</button> &nbsp;
          <button className={styles.cancelBtn} onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateNoteModal;
