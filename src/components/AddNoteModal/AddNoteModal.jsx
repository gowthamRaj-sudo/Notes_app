import React from 'react';
import styles from './AddNoteModal.module.css';
import Input from '../input/Input';

const AddNoteModal = ({ title, content, setTitle, setContent, onClose, onSave }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Add Notes</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div className={styles.body}>
          
          <Input value={title}
            onChange={(e) => setTitle(e.target.value)} placeholder={"Enter title..."}/>
          <textarea
            placeholder="Enter content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={13}
          ></textarea>
        </div>
        <div className={styles.footer}>
          <button className={styles.addBtn} onClick={onSave}>Add</button> &nbsp;
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
