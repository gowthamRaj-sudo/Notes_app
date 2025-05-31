import React from 'react';
import styles from './NoteCard.module.css';

const NoteCard = ({ note, onEdit, onDelete ,setSelectedNote,id}) => {

  console.log("notes in component--->", note)
  return (
    <> {note.map((e)=>
      <div className={`${styles["note-card"]}`} key={e.id} onClick={()=>{setSelectedNote(e);id(e.id)}}>
      <div className={`${styles["note-header"]}`}>
        <span className={`${styles["note-title"]}`}>{e?.title}</span>
        <button className={`${styles["edit-icon"]}`} onClick={ onEdit}>🎯</button>
      </div>
      <div className={`${styles["note-content"]}`}>
        <p>{e?.content}</p>
        <span className={`${styles["note-footer"]}`}>
          Last Modified : {new Date(e?.id).toDateString()}
        </span>
      </div>
    </div>
    )}</>
  );
};

export default NoteCard;
